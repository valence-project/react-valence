import { DateField } from "@react-valence/datepicker";
import { Story } from "@ladle/react";
import { ValenceDateFieldProps, DateValue } from "@types-valence/datepicker";

import {
  CalendarDate,
  CalendarDateTime,
  parseAbsolute,
  parseAbsoluteToLocal,
  parseDate,
  parseDateTime,
  parseZonedDateTime,
  toZoned,
} from "@internationalized/date";
import { Flex } from "@react-valence/layout";
import { Item, Picker, Section } from "@react-valence/picker";
import { Provider } from "@react-valence/provider";
import React from "react";
import { useLocale } from "@react-aria/i18n";

const BlockDecorator = (storyFn) => <div>{storyFn()}</div>;

export default {
  title: "Date Field",
  component: DateField,
};

function render(props = {}) {
  return (
    <Example
      label="Date"
      onChange={() => console.log("change")}
      maxWidth="calc(100vw - 40px)"
      {...props}
    />
  );
}

// https://github.com/unicode-org/cldr/blob/22af90ae3bb04263f651323ce3d9a71747a75ffb/common/supplemental/supplementalData.xml#L4649-L4664
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
  // {territories: 'CN CX HK MO SG', ordering: 'gregory chinese'},
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
  // {label: 'Marathi (India)', locale: 'mr-IN', territories: 'IN', ordering: 'gregory indian'},
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
  // {territories: 'KR', ordering: 'gregory dangi'},
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

export const Example: Story<ValenceDateFieldProps<DateValue>> = (props) => {
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
          {(item) => <Item key={item.locale}>{item.label}</Item>}
        </Picker>
        <Picker
          label="Calendar"
          selectedKey={calendar}
          onSelectionChange={setCalendar}
        >
          <Section title="Preferred" items={preferredCalendars}>
            {(item) => <Item>{item.name}</Item>}
          </Section>
          <Section title="Other" items={otherCalendars}>
            {(item) => <Item>{item.name}</Item>}
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
        <DateField {...props} />
      </Provider>
    </Flex>
  );
};

const DateFieldRender: Story<ValenceDateFieldProps<DateValue>> = (args) => (
  <DateField {...args} />
);

export const Default = DateFieldRender.bind({});
Default.args = {
  label: "Date",
};

export const DefaultValue: Story<ValenceDateFieldProps<DateValue>> =
  DateFieldRender.bind({});
DefaultValue.args = { defaultValue: parseDate("2020-02-03") };

export const ControlledValue: Story<ValenceDateFieldProps<DateValue>> =
  DateFieldRender.bind({});
ControlledValue.args = { value: new CalendarDate(2020, 2, 3) };

export const DefaultValueZoned: Story<ValenceDateFieldProps<DateValue>> =
  DateFieldRender.bind({});
DefaultValueZoned.args = {
  defaultValue: toZoned(parseDate("2020-02-03"), "America/Los_Angeles"),
};

export const GranularityMinute: Story<ValenceDateFieldProps<DateValue>> =
  DateFieldRender.bind({});
GranularityMinute.args = { granularity: "minute" };

export const GranularitySecond: Story<ValenceDateFieldProps<DateValue>> =
  DateFieldRender.bind({});
GranularitySecond.args = { granularity: "second" };

export const HourCycle12: Story<ValenceDateFieldProps<DateValue>> =
  DateFieldRender.bind({});
HourCycle12.args = { granularity: "minute", hourCycle: 12 };

export const HourCycle24: Story<ValenceDateFieldProps<DateValue>> =
  DateFieldRender.bind({});
HourCycle24.args = { granularity: "minute", hourCycle: 24 };

export const GranularityMinuteDefaultValue: Story<
  ValenceDateFieldProps<DateValue>
> = DateFieldRender.bind({});
GranularityMinuteDefaultValue.args = {
  granularity: "minute",
  defaultValue: parseDateTime("2021-03-14T08:45"),
};

export const GranularityMinuteDefaultValueZoned: Story<
  ValenceDateFieldProps<DateValue>
> = DateFieldRender.bind({});
GranularityMinuteDefaultValueZoned.args = {
  granularity: "minute",
  defaultValue: parseZonedDateTime(
    "2021-11-07T00:45-07:00[America/Los_Angeles]"
  ),
};

export const GranularityMinuteDefaultValueZonedAbsolute: Story<
  ValenceDateFieldProps<DateValue>
> = DateFieldRender.bind({});
GranularityMinuteDefaultValueZonedAbsolute.args = {
  granularity: "minute",
  defaultValue: parseAbsoluteToLocal("2021-11-07T07:45:00Z"),
};

export const GranularityMinuteDefaultValueZonedAbsoluteTimeZone: Story<
  ValenceDateFieldProps<DateValue>
> = DateFieldRender.bind({});
GranularityMinuteDefaultValueZonedAbsoluteTimeZone.args = {
  granularity: "minute",
  defaultValue: parseAbsolute("2021-11-07T07:45:00Z", "America/New_York"),
};

export const DefaultValueWithTimeGranularityDay: Story<
  ValenceDateFieldProps<DateValue>
> = DateFieldRender.bind({});
DefaultValueWithTimeGranularityDay.args = {
  granularity: "day",
  defaultValue: parseDateTime("2021-03-14T08:45"),
};

export const HideTimeZone: Story<ValenceDateFieldProps<DateValue>> =
  DateFieldRender.bind({});
HideTimeZone.args = {
  granularity: "minute",
  defaultValue: parseZonedDateTime(
    "2021-11-07T00:45-07:00[America/Los_Angeles]"
  ),
  hideTimeZone: true,
};

export const IsDisabled: Story<ValenceDateFieldProps<DateValue>> =
  DateFieldRender.bind({});
IsDisabled.args = { isDisabled: true, value: new CalendarDate(2020, 2, 3) };

export const IsQuietIsDisabled: Story<ValenceDateFieldProps<DateValue>> =
  DateFieldRender.bind({});
IsQuietIsDisabled.args = {
  isQuiet: true,
  isDisabled: true,
  value: new CalendarDate(2020, 2, 3),
};

export const IsReadOnly: Story<ValenceDateFieldProps<DateValue>> =
  DateFieldRender.bind({});
IsReadOnly.args = { isReadOnly: true, value: new CalendarDate(2020, 2, 3) };

export const AutoFocus: Story<ValenceDateFieldProps<DateValue>> =
  DateFieldRender.bind({});
AutoFocus.args = { autoFocus: true };

export const ValidationStateInvalid: Story<ValenceDateFieldProps<DateValue>> =
  DateFieldRender.bind({});
ValidationStateInvalid.args = {
  validationState: "invalid",
  value: new CalendarDate(2020, 2, 3),
};

export const ValidationStateValid: Story<ValenceDateFieldProps<DateValue>> =
  DateFieldRender.bind({});
ValidationStateValid.args = {
  validationState: "valid",
  value: new CalendarDate(2020, 2, 3),
};

export const MinValue_2010_1_1MaxValue_2020_1_1: Story<
  ValenceDateFieldProps<DateValue>
> = DateFieldRender.bind({});
MinValue_2010_1_1MaxValue_2020_1_1.args = {
  minValue: new CalendarDate(2010, 0, 1),
  maxValue: new CalendarDate(2020, 0, 1),
};

export const PlaceholderValue_1980_1_1: Story<
  ValenceDateFieldProps<DateValue>
> = DateFieldRender.bind({});
PlaceholderValue_1980_1_1.args = {
  placeholderValue: new CalendarDate(1980, 1, 1),
};

export const PlaceholderValue_1980_1_1_8Am: Story<
  ValenceDateFieldProps<DateValue>
> = DateFieldRender.bind({});
PlaceholderValue_1980_1_1_8Am.args = {
  placeholderValue: new CalendarDateTime(1980, 1, 1, 8),
};

export const PlaceholderValue_1980_1_1Zoned: Story<
  ValenceDateFieldProps<DateValue>
> = DateFieldRender.bind({});
PlaceholderValue_1980_1_1Zoned.args = {
  placeholderValue: toZoned(
    new CalendarDate(1980, 1, 1),
    "America/Los_Angeles"
  ),
};

export const ShowFormatHelpText: Story<ValenceDateFieldProps<DateValue>> =
  DateFieldRender.bind({});
PlaceholderValue_1980_1_1Zoned.args = { showFormatHelpText: true };

export const IsQuiet: Story<ValenceDateFieldProps<DateValue>> =
  DateFieldRender.bind({});
IsQuiet.args = { isQuiet: true };

export const LabelPositionSide: Story<ValenceDateFieldProps<DateValue>> =
  DateFieldRender.bind({});
LabelPositionSide.args = { labelPosition: "side" };

export const LabelAlignEnd: Story<ValenceDateFieldProps<DateValue>> =
  DateFieldRender.bind({});
LabelAlignEnd.args = { labelPosition: "top", labelAlign: "end" };

export const Required: Story<ValenceDateFieldProps<DateValue>> =
  DateFieldRender.bind({});
Required.args = { isRequired: true };

export const RequiredWithLabel: Story<ValenceDateFieldProps<DateValue>> =
  DateFieldRender.bind({});
RequiredWithLabel.args = { isRequired: true, necessityIndicator: "label" };

export const Optional: Story<ValenceDateFieldProps<DateValue>> =
  DateFieldRender.bind({});
Optional.args = { necessityIndicator: "label" };

export const NoVisibleLabel: Story<ValenceDateFieldProps<DateValue>> =
  DateFieldRender.bind({});
NoVisibleLabel.args = { "aria-label": "Date", label: null };

export const QuietNoVisibleLabel: Story<ValenceDateFieldProps<DateValue>> =
  DateFieldRender.bind({});
QuietNoVisibleLabel.args = { isQuiet: true, "aria-label": "Date", label: null };

export const CustomWidth: Story<ValenceDateFieldProps<DateValue>> =
  DateFieldRender.bind({});
CustomWidth.args = { width: "size-3000" };

export const QuietCustomWidth: Story<ValenceDateFieldProps<DateValue>> =
  DateFieldRender.bind({});
QuietCustomWidth.args = { isQuiet: true, width: "size-3000" };

export const CustomWidthNoVisibleLabel: Story<
  ValenceDateFieldProps<DateValue>
> = DateFieldRender.bind({});
CustomWidthNoVisibleLabel.args = {
  width: "size-3000",
  label: null,
  "aria-label": "Date",
};

export const CustomWidthLabelPositionSide: Story<
  ValenceDateFieldProps<DateValue>
> = DateFieldRender.bind({});
CustomWidthLabelPositionSide.args = {
  width: "size-3000",
  labelPosition: "side",
};

export const Description: Story<ValenceDateFieldProps<DateValue>> =
  DateFieldRender.bind({});
Description.args = { description: "Help text" };

export const ErrorMessage: Story<ValenceDateFieldProps<DateValue>> =
  DateFieldRender.bind({});
ErrorMessage.args = {
  errorMessage: "Enter a date after today",
  validationState: "invalid",
};
