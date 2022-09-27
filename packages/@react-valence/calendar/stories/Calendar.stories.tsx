import { action, Story } from "@ladle/react";
import { ActionButton } from "@react-valence/button";
import { Calendar } from "../";
import {
  CalendarDate,
  CalendarDateTime,
  getLocalTimeZone,
  isWeekend,
  parseZonedDateTime,
  today,
  ZonedDateTime,
} from "@internationalized/date";
import { DateValue } from "@react-types/calendar";
import { Flex } from "@react-valence/layout";
import { Item, Picker, Section } from "@react-valence/picker";
import { Provider } from "@react-valence/provider";
import React, { useState } from "react";
import { TimeField } from "@react-valence/datepicker";
import { useLocale } from "@react-aria/i18n";
import { View } from "@react-valence/view";

import { ValenceCalendarProps } from "@types-valence/calendar";

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

export default {
  title: "Calendar",
  component: Calendar,
};

const CalendarRender: Story<ValenceCalendarProps<DateValue>> = (props) => {
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
      <Flex direction="column" gap="size-150" wrap>
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
        <View maxWidth="100vw" padding="size-10" overflow="auto">
          <Calendar {...props} />
        </View>
      </Provider>
    </Flex>
  );
};

export const Default = CalendarRender.bind({});
Default.storyName = "Default";
Default.args = {};

export const DefaultValue = CalendarRender.bind({});
DefaultValue.storyName = "Default Value";
DefaultValue.args = { defaultValue: new CalendarDate(2004, 11, 12) };

export const ControlledDefaultValue = CalendarRender.bind({});
ControlledDefaultValue.storyName = "Controlled Value";
ControlledDefaultValue.args = { value: new CalendarDate(2004, 11, 12) };

export const MinTodayMaxOneWeek = CalendarRender.bind({});
MinTodayMaxOneWeek.storyName = "Min Max";
MinTodayMaxOneWeek.args = {
  minValue: today(getLocalTimeZone()),
  maxValue: today(getLocalTimeZone()).add({ weeks: 1 }),
};

export const MinMaxDefault = CalendarRender.bind({});
MinMaxDefault.storyName = "Min Max Default";
MinMaxDefault.args = {
  defaultValue: new CalendarDate(2004, 11, 12),
  minValue: new CalendarDate(2004, 11, 2),
  maxValue: new CalendarDate(2004, 11, 22),
};

export const Disabled = CalendarRender.bind({});
Disabled.storyName = "Disabled";
Disabled.args = {
  defaultValue: new CalendarDate(2004, 11, 12),
  isDisabled: true,
};

export const UnavailableDates = CalendarRender.bind({});
UnavailableDates.storyName = "UnavailableDates";
UnavailableDates.args = {
  isDateUnavailable: (date: DateValue) => {
    const disabledIntervals = [
      [today(getLocalTimeZone()), today(getLocalTimeZone()).add({ weeks: 1 })],
      [
        today(getLocalTimeZone()).add({ weeks: 2 }),
        today(getLocalTimeZone()).add({ weeks: 3 }),
      ],
    ];
    return disabledIntervals.some(
      (interval) =>
        date.compare(interval[0]) > 0 && date.compare(interval[1]) < 0
    );
  },
};

export const ReadOnly = CalendarRender.bind({});
ReadOnly.storyName = "Read Only";
ReadOnly.args = {
  defaultValue: new CalendarDate(2004, 11, 12),
  isReadOnly: true,
};

export const AutoFocus = CalendarRender.bind({});
AutoFocus.storyName = "Autofocus";
AutoFocus.args = {
  defaultValue: new CalendarDate(2004, 11, 12),
  autoFocus: true,
};

export const TwoVisibleMonths = CalendarRender.bind({});
TwoVisibleMonths.storyName = "Two Visible Months";
TwoVisibleMonths.args = { visibleMonths: 2 };

export const ThreeVisibleMonths = CalendarRender.bind({});
ThreeVisibleMonths.storyName = "Three Visible Months";
ThreeVisibleMonths.args = { visibleMonths: 3 };

export const MinThreeVisibleMonths = CalendarRender.bind({});
MinThreeVisibleMonths.storyName = "Min Value Three Visible Months";
MinThreeVisibleMonths.args = {
  minValue: today(getLocalTimeZone()).subtract({ weeks: 1 }),
  visibleMonths: 3,
};

export const MinDefaultThreeVisibleMonths = CalendarRender.bind({});
MinDefaultThreeVisibleMonths.storyName =
  "Min and Default Value Three Visible Months";
MinDefaultThreeVisibleMonths.args = {
  minValue: today(getLocalTimeZone()).subtract({ weeks: 1 }),
  defaultValue: today(getLocalTimeZone()).add({ weeks: 1 }),
  visibleMonths: 3,
};

export const DefaultFocusedValue = CalendarRender.bind({});
DefaultFocusedValue.storyName = "DefaultFocusedValue";
DefaultFocusedValue.args = {
  defaultFocusedValue: new CalendarDate(2004, 11, 12),
};

export const ValidationStateInvalid = CalendarRender.bind({});
ValidationStateInvalid.storyName = "ValidationStateInvalid";
ValidationStateInvalid.args = {
  validationState: "invalid",
  defaultValue: new CalendarDate(2004, 11, 12),
};

export const ValidationStateInvalidCustomMessage = CalendarRender.bind({});
ValidationStateInvalidCustomMessage.storyName =
  "ValidationStateInvalidCustomMessage";
ValidationStateInvalidCustomMessage.args = {
  validationState: "invalid",
  errorMessage: "Unfortunately, that day doesn't work for me.",
  defaultValue: new CalendarDate(2004, 11, 12),
};

export const DateUnavailable = CalendarRender.bind({});
DateUnavailable.storyName = "DateUnavailable";
let locale = navigator.languages[0];
DateUnavailable.args = {
  isDateUnavailable: (date: DateValue) => isWeekend(date, locale),
  allowsNonContiguousRanges: true,
  defaultValue: new CalendarDate(2021, 10, 3),
};

export const AriaLabel = CalendarRender.bind({});
AriaLabel.storyName = "Aria Label";
AriaLabel.args = { "aria-label": "Appointment date" };

const CalendarTimeRender: Story<ValenceCalendarProps<DateValue>> = (props) => {
  let [value, setValue] = useState(new CalendarDateTime(2011, 11, 12, 8));
  let onChange = (v: CalendarDateTime) => {
    setValue(v);
    action("onChange")(v);
  };

  return (
    <Flex direction="column">
      <Calendar value={value} onChange={onChange} />
      <TimeField label="Time" value={value} onChange={onChange} />
    </Flex>
  );
};

export const CalendarWithTime = CalendarTimeRender.bind({});
CalendarWithTime.storyName = "Calendar With Time";
CalendarWithTime.args = {};

const CalendarZonedTimeRender: Story<ValenceCalendarProps<DateValue>> = (
  props
) => {
  let [value, setValue] = useState(
    parseZonedDateTime("2004-11-12T00:45-08:00[America/Los_Angeles]")
  );
  let onChange = (v: ZonedDateTime) => {
    setValue(v);
    action("onChange")(v);
  };

  return (
    <Flex direction="column">
      <Calendar value={value} onChange={onChange} />
      <TimeField label="Time" value={value} onChange={onChange} />
    </Flex>
  );
};

export const CalendarWithZonedTime = CalendarZonedTimeRender.bind({});
CalendarWithZonedTime.storyName = "Calendar With Zoned Time";
CalendarWithZonedTime.args = {};

const CalendarControlledFocusRender: Story<ValenceCalendarProps<DateValue>> = (
  props
) => {
  let [focusedDate, setFocusedDate] = useState(new CalendarDate(2004, 11, 12));
  return (
    <Flex direction="column" alignItems="start" gap="size-200">
      <ActionButton
        onPress={() => setFocusedDate(new CalendarDate(2004, 11, 12))}
      >
        Reset focused date
      </ActionButton>
      <Calendar focusedValue={focusedDate} onFocusChange={setFocusedDate} />
    </Flex>
  );
};

export const CalendarControlledFocus = CalendarControlledFocusRender.bind({});
CalendarControlledFocus.storyName = "Calendar Controlled Focus";
CalendarControlledFocus.args = {};
