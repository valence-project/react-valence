import { action, Story } from "@ladle/react";
import { ActionButton } from "@react-valence/button";
import {
  CalendarDate,
  getLocalTimeZone,
  isWeekend,
  parseDate,
  today,
  toZoned,
} from "@internationalized/date";
import { chain } from "@react-aria/utils";
import { DateRangePicker } from "../";
import { DateValue } from "@react-types/calendar";
import { Flex } from "@react-valence/layout";
import { Item, Picker, Section } from "@react-valence/picker";
import { Provider } from "@react-valence/provider";
import React from "react";
import { useLocale } from "@react-aria/i18n";
import { ValenceDateRangePickerProps } from "@react-valence/datepicker";

const BlockDecorator = (storyFn) => <div>{storyFn()}</div>;

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

function Example(props) {
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
        <DateRangePicker {...props} />
      </Provider>
    </Flex>
  );
}

const DateRangePickerRender: Story<ValenceDateRangePickerProps<DateValue>> = (
  props
) => {
  return (
    <div>
      <Example
        label="Date range"
        onChange={action("change")}
        maxWidth="calc(100vw - 40px)"
        {...props}
      />
    </div>
  );
};

export const ControlledValue: Story<ValenceDateRangePickerProps<DateValue>> = (
  props
) => {
  let [value, setValue] = React.useState(null);

  return (
    <Flex direction="column" alignItems="center" gap="size-150">
      <DateRangePicker
        label="Controlled"
        {...props}
        value={value}
        onChange={chain(setValue, action("onChange"))}
      />
      <ActionButton
        onPress={() =>
          setValue({
            start: new CalendarDate(2020, 2, 3),
            end: new CalendarDate(2020, 5, 4),
          })
        }
      >
        Change value
      </ActionButton>
      <ActionButton onPress={() => setValue(null)}>Clear</ActionButton>
    </Flex>
  );
};

export const Default: Story<ValenceDateRangePickerProps<DateValue>> =
  DateRangePickerRender.bind({});

export const DefaultValue: Story<ValenceDateRangePickerProps<DateValue>> =
  DateRangePickerRender.bind({});
DefaultValue.args = {
  defaultValue: {
    start: new CalendarDate(2020, 2, 3),
    end: new CalendarDate(2020, 5, 4),
  },
};

export const DefaultValueZoned: Story<ValenceDateRangePickerProps<DateValue>> =
  DateRangePickerRender.bind({});
DefaultValueZoned.args = {
  defaultValue: {
    start: toZoned(parseDate("2020-02-03"), "America/New_York"),
    end: toZoned(parseDate("2020-02-05"), "America/Los_Angeles"),
  },
};

export const GranularityMinute: Story<ValenceDateRangePickerProps<DateValue>> =
  DateRangePickerRender.bind({});
GranularityMinute.args = { granularity: "minute" };

export const GranularitySecond: Story<ValenceDateRangePickerProps<DateValue>> =
  DateRangePickerRender.bind({});
GranularitySecond.args = { granularity: "second" };

export const HourCycle_12: Story<ValenceDateRangePickerProps<DateValue>> =
  DateRangePickerRender.bind({});
HourCycle_12.args = { granularity: "minute", hourCycle: 12 };

export const HourCycle_24: Story<ValenceDateRangePickerProps<DateValue>> =
  DateRangePickerRender.bind({});
HourCycle_24.args = { granularity: "minute", hourCycle: 24 };

export const IsDisabled: Story<ValenceDateRangePickerProps<DateValue>> =
  DateRangePickerRender.bind({});
IsDisabled.args = {
  isDisabled: true,
  value: {
    start: new CalendarDate(2020, 2, 3),
    end: new CalendarDate(2020, 5, 4),
  },
};

export const IsQuietIsDisabled: Story<ValenceDateRangePickerProps<DateValue>> =
  DateRangePickerRender.bind({});
IsQuietIsDisabled.args = {
  isQuiet: true,
  isDisabled: true,
  value: {
    start: new CalendarDate(2020, 2, 3),
    end: new CalendarDate(2020, 5, 4),
  },
};

export const IsReadOnly: Story<ValenceDateRangePickerProps<DateValue>> =
  DateRangePickerRender.bind({});
IsReadOnly.args = {
  isReadOnly: true,
  value: {
    start: new CalendarDate(2020, 2, 3),
    end: new CalendarDate(2020, 5, 4),
  },
};

export const AutoFocus: Story<ValenceDateRangePickerProps<DateValue>> =
  DateRangePickerRender.bind({});
AutoFocus.args = { autoFocus: true };

export const ValidationStateInvalid: Story<
  ValenceDateRangePickerProps<DateValue>
> = DateRangePickerRender.bind({});
ValidationStateInvalid.args = {
  validationState: "invalid",
  value: {
    start: new CalendarDate(2020, 2, 3),
    end: new CalendarDate(2020, 5, 4),
  },
};

export const ValidationStateValid: Story<
  ValenceDateRangePickerProps<DateValue>
> = DateRangePickerRender.bind({});
ValidationStateValid.args = {
  validationState: "valid",
  value: {
    start: new CalendarDate(2020, 2, 3),
    end: new CalendarDate(2020, 5, 4),
  },
};

export const MinDate_2010_1_1MaxDate_2020_1_1: Story<
  ValenceDateRangePickerProps<DateValue>
> = DateRangePickerRender.bind({});
MinDate_2010_1_1MaxDate_2020_1_1.args = {
  minValue: new CalendarDate(2010, 1, 1),
  maxValue: new CalendarDate(2020, 1, 1),
};

export const IsDateUnavailable: Story<
  ValenceDateRangePickerProps<DateValue>
> = (args) => {
  const disabledRanges = [
    [today(getLocalTimeZone()), today(getLocalTimeZone()).add({ weeks: 1 })],
    [
      today(getLocalTimeZone()).add({ weeks: 2 }),
      today(getLocalTimeZone()).add({ weeks: 3 }),
    ],
  ];
  let [value, setValue] = React.useState(null);
  let isInvalid =
    value &&
    disabledRanges.some(
      (interval) =>
        value.end.compare(interval[0]) >= 0 &&
        value.start.compare(interval[1]) <= 0
    );
  let isDateUnavailable = (date) =>
    disabledRanges.some(
      (interval) =>
        date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0
    );
  return (
    <DateRangePickerRender
      {...{
        value,
        onChange: setValue,
        validationState: isInvalid ? "invalid" : null,
        isDateUnavailable,
        errorMessage: "Selected ranges may not include unavailable dates.",
      }}
    />
  );
};

export const IsDateAvailableAllowsNonContiguousRanges: Story<
  ValenceDateRangePickerProps<DateValue>
> = (args) => {
  let { locale } = useLocale();
  return (
    <DateRangePickerRender
      {...{
        isDateUnavailable: (date: DateValue) => isWeekend(date, locale),
        allowsNonContiguousRanges: true,
      }}
    />
  );
};

export const PlaceholderValue_1980_1_1: Story<
  ValenceDateRangePickerProps<DateValue>
> = DateRangePickerRender.bind({});
PlaceholderValue_1980_1_1.args = {
  placeholderValue: new CalendarDate(1980, 1, 1),
};

export const MaxVisibleMonths_2: Story<ValenceDateRangePickerProps<DateValue>> =
  DateRangePickerRender.bind({});
MaxVisibleMonths_2.args = { maxVisibleMonths: 2, granularity: "minute" };

export const MaxVisibleMonths_3: Story<ValenceDateRangePickerProps<DateValue>> =
  DateRangePickerRender.bind({});
MaxVisibleMonths_3.args = { maxVisibleMonths: 3, granularity: "minute" };

export const ShowFormatHelpText: Story<ValenceDateRangePickerProps<DateValue>> =
  DateRangePickerRender.bind({});
ShowFormatHelpText.args = { showFormatHelpText: true };

export const IsQuiet: Story<ValenceDateRangePickerProps<DateValue>> =
  DateRangePickerRender.bind({});
IsQuiet.args = { isQuiet: true };

export const LabelPositionSide: Story<ValenceDateRangePickerProps<DateValue>> =
  DateRangePickerRender.bind({});
LabelPositionSide.args = { labelPosition: "side" };

export const LabelAlignEnd: Story<ValenceDateRangePickerProps<DateValue>> =
  DateRangePickerRender.bind({});
LabelAlignEnd.args = { labelPosition: "top", labelAlign: "end" };

export const Required: Story<ValenceDateRangePickerProps<DateValue>> =
  DateRangePickerRender.bind({});
Required.args = { isRequired: true };

export const RequiredWithLabel: Story<ValenceDateRangePickerProps<DateValue>> =
  DateRangePickerRender.bind({});
RequiredWithLabel.args = { isRequired: true, necessityIndicator: "label" };

export const Optional: Story<ValenceDateRangePickerProps<DateValue>> =
  DateRangePickerRender.bind({});
Optional.args = { necessityIndicator: "label" };

export const NoVisibleLabel: Story<ValenceDateRangePickerProps<DateValue>> =
  DateRangePickerRender.bind({});
NoVisibleLabel.args = { "aria-label": "Date range", label: null };

export const QuietNoVisibleLabel: Story<
  ValenceDateRangePickerProps<DateValue>
> = DateRangePickerRender.bind({});
QuietNoVisibleLabel.args = {
  isQuiet: true,
  "aria-label": "Date range",
  label: null,
};

export const CustomWidth: Story<ValenceDateRangePickerProps<DateValue>> =
  DateRangePickerRender.bind({});
CustomWidth.args = { width: "size-4600" };

export const QuietCustomWidth: Story<ValenceDateRangePickerProps<DateValue>> =
  DateRangePickerRender.bind({});
QuietCustomWidth.args = { isQuiet: true, width: "size-4600" };

export const CustomWidthNoVisibleLabel: Story<
  ValenceDateRangePickerProps<DateValue>
> = DateRangePickerRender.bind({});
CustomWidthNoVisibleLabel.args = {
  width: "size-4600",
  label: null,
  "aria-label": "Date range",
};

export const CustomWidthLabelPositionSide: Story<
  ValenceDateRangePickerProps<DateValue>
> = DateRangePickerRender.bind({});
CustomWidthLabelPositionSide.args = {
  width: "size-4600",
  labelPosition: "side",
};

export const Description: Story<ValenceDateRangePickerProps<DateValue>> =
  DateRangePickerRender.bind({});
Description.args = { description: "Help text" };

export const ErrorMessage: Story<ValenceDateRangePickerProps<DateValue>> =
  DateRangePickerRender.bind({});
ErrorMessage.args = {
  errorMessage: "Dates must be after today",
  validationState: "invalid",
};

export const InvalidWithTime: Story<ValenceDateRangePickerProps<DateValue>> =
  DateRangePickerRender.bind({});
InvalidWithTime.args = {
  validationState: "invalid",
  granularity: "minute",
  defaultValue: {
    start: toZoned(parseDate("2020-02-03"), "America/New_York"),
    end: toZoned(parseDate("2020-02-12"), "America/Los_Angeles"),
  },
};

export const InScrollableContainer: Story<
  ValenceDateRangePickerProps<DateValue>
> = (args) => (
  <div style={{ height: "200vh" }}>
    <DateRangePickerRender {...{ granularity: "second" }} />
  </div>
);

export const ShouldFlipFalse: Story<ValenceDateRangePickerProps<DateValue>> =
  DateRangePickerRender.bind({});
ShouldFlipFalse.args = { shouldFlip: false };
