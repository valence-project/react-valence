import { Story } from "@ladle/react";
import { ValenceDatePickerProps, DateValue } from "@types-valence/datepicker";
import React from "react";

import { ActionButton } from "@react-valence/button";
import {
  CalendarDate,
  CalendarDateTime,
  getLocalTimeZone,
  parseAbsolute,
  parseAbsoluteToLocal,
  parseDate,
  parseDateTime,
  parseZonedDateTime,
  today,
  toZoned,
} from "@internationalized/date";
import { chain } from "@react-aria/utils";
import { DatePicker } from "@react-valence/datepicker";
import { Flex } from "@react-valence/layout";
import { Item, Picker, Section } from "@react-valence/picker";
import { Provider } from "@react-valence/provider";
import { useLocale } from "@react-aria/i18n";
import { ActionGroup } from "@react-valence/actiongroup";
import { Text } from "@react-valence/text";

import Clear from "@valence-icons/ui/CloseCircleFill";
import SetDate from "@valence-icons/ui/CalendarEventFill";

export default {
  title: "DatePicker",
  component: DatePicker,
};

const preferences = [
  { locale: "", label: "Default", ordering: "gregory" },
  {
    label: "Arabic (Algeria)",
    locale: "ar-DZ",
    territories: "DJ DZ EH ER IQ JO KM LB LY MA MR OM PS SD SY TD TN YE",
    ordering: "gregory islamic islamic-civil islamic-tbla",
  },
  {
    label: "Arabic (United Arab Emirates)",
    locale: "ar-AE",
    territories: "AE BH KW QA",
    ordering: "gregory islamic-umalqura islamic islamic-civil islamic-tbla",
  },
  {
    label: "Arabic (Egypt)",
    locale: "AR-EG",
    territories: "EG",
    ordering: "gregory coptic islamic islamic-civil islamic-tbla",
  },
  {
    label: "Arabic (Saudi Arabia)",
    locale: "ar-SA",
    territories: "SA",
    ordering: "islamic-umalqura gregory islamic islamic-rgsa",
  },
  {
    label: "Farsi (Afghanistan)",
    locale: "fa-AF",
    territories: "AF IR",
    ordering: "persian gregory islamic islamic-civil islamic-tbla",
  },
  { territories: "CN CX HK MO SG", ordering: "gregory chinese" },
  {
    label: "Amharic (Ethiopia)",
    locale: "am-ET",
    territories: "ET",
    ordering: "gregory ethiopic ethioaa",
  },
  {
    label: "Hebrew (Israel)",
    locale: "he-IL",
    territories: "IL",
    ordering: "gregory hebrew islamic islamic-civil islamic-tbla",
  },
  {
    label: "Hindi (India)",
    locale: "hi-IN",
    territories: "IN",
    ordering: "gregory indian",
  },
  {
    label: "Marathi (India)",
    locale: "mr-IN",
    territories: "IN",
    ordering: "gregory indian",
  },
  {
    label: "Bengali (India)",
    locale: "bn-IN",
    territories: "IN",
    ordering: "gregory indian",
  },
  {
    label: "Japanese (Japan)",
    locale: "ja-JP",
    territories: "JP",
    ordering: "gregory japanese",
  },
  { territories: "KR", ordering: "gregory dangi" },
  {
    label: "Thai (Thailand)",
    locale: "th-TH",
    territories: "TH",
    ordering: "buddhist gregory",
  },
  {
    label: "Chinese (Taiwan)",
    locale: "zh-TW",
    territories: "TW",
    ordering: "gregory roc chinese",
  },
];

const calendars = [
  { key: "gregory", name: "Gregorian" },
  { key: "japanese", name: "Japanese" },
  { key: "buddhist", name: "Buddhist" },
  { key: "roc", name: "Taiwan" },
  { key: "persian", name: "Persian" },
  { key: "indian", name: "Indian" },
  { key: "islamic-umalqura", name: "Islamic (Umm al-Qura)" },
  { key: "islamic-civil", name: "Islamic Civil" },
  { key: "islamic-tbla", name: "Islamic Tabular" },
  { key: "hebrew", name: "Hebrew" },
  { key: "coptic", name: "Coptic" },
  { key: "ethiopic", name: "Ethiopic" },
  { key: "ethioaa", name: "Ethiopic (Amete Alem)" },
];

const DatePickerRender: Story<ValenceDatePickerProps<DateValue>> = (props) => {
  let [locale, setLocale] = React.useState("");
  let [calendar, setCalendar] = React.useState<React.Key>(calendars[0].key);
  let { locale: defaultLocale } = useLocale();

  let pref = preferences.find((p) => p.locale === locale);
  let preferredCalendars = React.useMemo(
    () =>
      pref
        ? pref.ordering
            .split(" ")
            .map((p) => calendars.find((c) => c.key === p))
            .filter(Boolean)
        : [calendars[0]],
    [pref]
  );
  let otherCalendars = React.useMemo(
    () =>
      calendars.filter((c) => !preferredCalendars.some((p) => p.key === c.key)),
    [preferredCalendars]
  );

  let updateLocale = (locale) => {
    setLocale(locale);
    let pref = preferences.find((p) => p.locale === locale);
    setCalendar(pref.ordering.split(" ")[0]);
  };

  return (
    <Flex direction="column" gap="size-600" alignItems="center">
      <Flex direction="row" gap="size-150" wrap justifyContent="center">
        <Picker
          label="Locale"
          items={preferences}
          selectedKey={locale}
          onSelectionChange={updateLocale}
        >
          {(item) => <Item key={Math.random()}>{item.label}</Item>}
        </Picker>
        <Picker
          label="Calendar"
          selectedKey={calendar}
          onSelectionChange={setCalendar}
        >
          <Section title="Preferred" items={preferredCalendars}>
            {(item) => <Item key="red">{item.name}</Item>}
          </Section>
          <Section title="Other" items={otherCalendars}>
            {(item) => <Item key="blue">{item.name}</Item>}
          </Section>
        </Picker>
      </Flex>
      <Provider
        locale={
          (locale || defaultLocale) +
          (calendar && calendar !== preferredCalendars[0].key
            ? "-u-ca-" + calendar
            : "")
        }
      >
        <DatePicker {...props} />
      </Provider>
    </Flex>
  );
};

export const ControlledValue: Story<ValenceDatePickerProps<DateValue>> = (
  props
) => {
  let [date, setDate] = React.useState(null);

  const setValue: any = (control) => {
    switch (control) {
      case 'setValue':
        setDate(new CalendarDate(2020, 2, 3))
        break;
      case 'clear':
        setDate(null)
        break;
    }
  }

  return (
    <Flex direction="column" alignItems="center" gap="size-150">
      <DatePickerRender
        label="Controlled"
        {...props}
        value={date}
        onChange={chain(setValue, console.log("onChange"))}
      />
      <ActionGroup onAction={(key)=>setValue(key)} density={'compact'}>
        <Item key={'setValue'}><SetDate /><Text>Set Value</Text></Item>
        <Item key={'clear'}><Clear color={"negative"}/><Text>Clear</Text></Item>
      </ActionGroup>
    </Flex>
  );
};

export const Default: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
Default.args = {
  label: "Date",
};

export const DefaultValue: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
DefaultValue.args = { defaultValue: parseDate("2020-02-03") };

export const DefaultValueZoned: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
DefaultValueZoned.args = {
  defaultValue: toZoned(parseDate("2020-02-03"), "America/Los_Angeles"),
};

export const GranularityMinute: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
GranularityMinute.args = { granularity: "minute" };

export const GranularitySecond: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
GranularitySecond.args = { granularity: "second" };

export const HourCycle_12: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
HourCycle_12.args = { granularity: "minute", hourCycle: 12 };

export const HourCycle_24: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
HourCycle_24.args = { granularity: "minute", hourCycle: 24 };

export const GranularityMinuteDefaultValue: Story<
  ValenceDatePickerProps<DateValue>
> = DatePickerRender.bind({});
GranularityMinuteDefaultValue.args = {
  granularity: "minute",
  defaultValue: parseDateTime("2021-03-14T08:45"),
};

export const GranularityMinuteDefaultValueZoned: Story<
  ValenceDatePickerProps<DateValue>
> = DatePickerRender.bind({});
GranularityMinuteDefaultValueZoned.args = {
  granularity: "minute",
  defaultValue: parseZonedDateTime(
    "2021-11-07T00:45-07:00[America/Los_Angeles]"
  ),
};

export const GranularityMinuteDefaultValueZonedAbsolute: Story<
  ValenceDatePickerProps<DateValue>
> = DatePickerRender.bind({});
GranularityMinuteDefaultValueZonedAbsolute.args = {
  granularity: "minute",
  defaultValue: parseAbsoluteToLocal("2021-11-07T07:45:00Z"),
};

export const GranularityMinuteDefaultValueZonedAbsoluteTimeZone: Story<
  ValenceDatePickerProps<DateValue>
> = DatePickerRender.bind({});
GranularityMinuteDefaultValueZonedAbsoluteTimeZone.args = {
  granularity: "minute",
  defaultValue: parseAbsolute("2021-11-07T07:45:00Z", "America/New_York"),
};

export const DefaultValueWithTimeGranularityDay: Story<
  ValenceDatePickerProps<DateValue>
> = DatePickerRender.bind({});
DefaultValueWithTimeGranularityDay.args = {
  granularity: "day",
  defaultValue: parseDateTime("2021-03-14T08:45"),
};

export const HideTimeZone: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
HideTimeZone.args = {
  granularity: "minute",
  defaultValue: parseZonedDateTime(
    "2021-11-07T00:45-07:00[America/Los_Angeles]"
  ),
  hideTimeZone: true,
};

export const IsDisabled: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
IsDisabled.args = { isDisabled: true, value: new CalendarDate(2020, 2, 3) };

export const IsQuietIsDisabled: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
IsQuietIsDisabled.args = {
  isQuiet: true,
  isDisabled: true,
  value: new CalendarDate(2020, 2, 3),
};

export const IsReadOnly: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
IsReadOnly.args = { isReadOnly: true, value: new CalendarDate(2020, 2, 3) };

export const AutoFocus: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
AutoFocus.args = { autoFocus: true };

export const ValidationStateInvalid: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
ValidationStateInvalid.args = {
  validationState: "invalid",
  value: new CalendarDate(2020, 2, 3),
};

export const ValidationStateValid: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
ValidationStateValid.args = {
  validationState: "valid",
  value: new CalendarDate(2020, 2, 3),
};

export const MinValue_2010_1_1MaxValue_2020_1_1: Story<
  ValenceDatePickerProps<DateValue>
> = DatePickerRender.bind({});
MinValue_2010_1_1MaxValue_2020_1_1.args = {
  minValue: new CalendarDate(2010, 0, 1),
  maxValue: new CalendarDate(2020, 0, 1),
};

export const IsDateUnavailable: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
IsDateUnavailable.args = {
  isDateUnavailable: (date: DateValue) => {
    const disabledIntervals = [[today(getLocalTimeZone())]];
  },
};

export const PlaceholderValue_1980_1_1: Story<
  ValenceDatePickerProps<DateValue>
> = DatePickerRender.bind({});
PlaceholderValue_1980_1_1.args = {
  placeholderValue: new CalendarDate(1980, 1, 1),
};

export const PlaceholderValue_1980_1_1_8Am: Story<
  ValenceDatePickerProps<DateValue>
> = DatePickerRender.bind({});
PlaceholderValue_1980_1_1_8Am.args = {
  placeholderValue: new CalendarDateTime(1980, 1, 1, 8),
};

export const PlaceholderValue_1980_1_1Zoned: Story<
  ValenceDatePickerProps<DateValue>
> = DatePickerRender.bind({});
PlaceholderValue_1980_1_1Zoned.args = {
  placeholderValue: toZoned(
    new CalendarDate(1980, 1, 1),
    "America/Los_Angeles"
  ),
};

export const MaxVisibleMonths_2: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
MaxVisibleMonths_2.args = { maxVisibleMonths: 2, granularity: "minute" };

export const MaxVisibleMonths_3: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
MaxVisibleMonths_3.args = { maxVisibleMonths: 3, granularity: "minute" };

export const ShowFormatHelpText: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
ShowFormatHelpText.args = { showFormatHelpText: true };

export const IsQuiet: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
IsQuiet.args = { isQuiet: true };

export const LabelPositionSide: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
LabelPositionSide.args = { labelPosition: "side" };

export const LabelAlignEnd: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
LabelAlignEnd.args = { labelPosition: "top", labelAlign: "end" };

export const Required: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
Required.args = { isRequired: true };

export const RequiredWithLabel: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
RequiredWithLabel.args = { isRequired: true, necessityIndicator: "label" };

export const Optional: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
Optional.args = { necessityIndicator: "label" };

export const NoVisibleLabel: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
NoVisibleLabel.args = { "aria-label": "Date", label: null };

export const QuietNoVisibleLabel: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
QuietNoVisibleLabel.args = { isQuiet: true, "aria-label": "Date", label: null };

export const CustomWidth: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
CustomWidth.args = { width: "size-3000" };

export const QuietCustomWidth: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
QuietCustomWidth.args = { isQuiet: true, width: "size-3000" };

export const CustomWidthNoVisibleLabel: Story<
  ValenceDatePickerProps<DateValue>
> = DatePickerRender.bind({});
CustomWidthNoVisibleLabel.args = {
  width: "size-3000",
  label: null,
  "aria-label": "Date",
};

export const CustomWidthLabelPositionSide: Story<
  ValenceDatePickerProps<DateValue>
> = DatePickerRender.bind({});
CustomWidthLabelPositionSide.args = {
  width: "size-3000",
  labelPosition: "side",
};

export const Description: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
Description.args = { description: "Help text" };

export const ErrorMessage: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
ErrorMessage.args = {
  errorMessage: "Enter a date after today",
  validationState: "invalid",
};

export const InvalidWithTime: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
InvalidWithTime.args = {
  validationState: "invalid",
  granularity: "minute",
  defaultValue: parseDateTime("2021-03-14T08:45"),
};

export const ShouldFlipFalse: Story<ValenceDatePickerProps<DateValue>> =
  DatePickerRender.bind({});
ShouldFlipFalse.args = { shouldFlip: false };
