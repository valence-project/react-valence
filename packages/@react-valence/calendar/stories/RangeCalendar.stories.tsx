import {
  CalendarDate,
  CalendarDateTime,
  getLocalTimeZone,
  isWeekend,
  parseZonedDateTime,
  today,
} from "@internationalized/date";
import { DateValue } from "@types-valence/calendar";
import { Flex } from "@react-valence/layout";
import { RangeCalendar } from "@react-valence/calendar";
import { useState } from "react";
import { Story, action } from "@ladle/react";
import { TimeField } from "@react-valence/datepicker";
import { useLocale } from "@react-aria/i18n";
import { View } from "@react-valence/view";

import { ValenceRangeCalendarProps } from "@types-valence/calendar";

const RangeCalendarRender: Story<ValenceRangeCalendarProps<DateValue>> = (
  args
) => {
  return (
    <View maxWidth="100vw" overflow="auto">
      <RangeCalendar onChange={action("change")} {...args} />
    </View>
  );
};

const RangeCalendarRenderWithTime: Story<
  ValenceRangeCalendarProps<DateValue>
> = (args) => {
  let [value, setValue] = useState({
    start: new CalendarDateTime(2019, 6, 5, 8),
    end: new CalendarDateTime(2019, 6, 10, 12),
  });

  return (
    <Flex direction="column">
      <RangeCalendar value={value} onChange={setValue} />
      <Flex gap="size-100">
        <TimeField
          label="Start time"
          value={value.start}
          onChange={(v) => setValue({ ...value, start: v })}
        />
        <TimeField
          label="End time"
          value={value.end}
          onChange={(v) => setValue({ ...value, end: v })}
        />
      </Flex>
    </Flex>
  );
};

const RangeCalendarRenderWithZonedTime: Story<
  ValenceRangeCalendarProps<DateValue>
> = (args) => {
  let [value, setValue] = useState({
    start: parseZonedDateTime("2021-03-10T00:45-05:00[America/New_York]"),
    end: parseZonedDateTime("2021-03-26T18:05-07:00[America/Los_Angeles]"),
  });

  return (
    <Flex direction="column">
      <RangeCalendar value={value} onChange={setValue} />
      <Flex gap="size-100">
        <TimeField
          label="Start time"
          value={value.start}
          onChange={(v) => setValue({ ...value, start: v })}
        />
        <TimeField
          label="End time"
          value={value.end}
          onChange={(v) => setValue({ ...value, end: v })}
        />
      </Flex>
    </Flex>
  );
};

export const Default: Story<ValenceRangeCalendarProps<DateValue>> =
  RangeCalendarRender.bind({});

export const DefaultValue: Story<ValenceRangeCalendarProps<DateValue>> =
  RangeCalendarRender.bind({});
DefaultValue.args = {
  defaultValue: {
    start: new CalendarDate(2019, 6, 5),
    end: new CalendarDate(2019, 6, 10),
  },
};

export const ControlledValue: Story<ValenceRangeCalendarProps<DateValue>> =
  RangeCalendarRender.bind({});
ControlledValue.args = {
  value: {
    start: new CalendarDate(2019, 6, 5),
    end: new CalendarDate(2019, 6, 10),
  },
};

export const WithTime: Story<ValenceRangeCalendarProps<DateValue>> =
  RangeCalendarRenderWithTime.bind({});
export const WithZonedTime: Story<ValenceRangeCalendarProps<DateValue>> =
  RangeCalendarRenderWithZonedTime.bind({});

export const MinValueTodayMaxValue_1WeekFromNow: Story<
  ValenceRangeCalendarProps<DateValue>
> = RangeCalendarRender.bind({});
MinValueTodayMaxValue_1WeekFromNow.args = {
  defaultValue: {
    start: new CalendarDate(2019, 6, 5),
    end: new CalendarDate(2019, 6, 10),
  },
};

export const DefaultValueMinValueMaxValue: Story<
  ValenceRangeCalendarProps<DateValue>
> = RangeCalendarRender.bind({});
DefaultValueMinValueMaxValue.args = {
  defaultValue: {
    start: new CalendarDate(2019, 6, 10),
    end: new CalendarDate(2019, 6, 12),
  },
  minValue: new CalendarDate(2019, 6, 5),
  maxValue: new CalendarDate(2019, 6, 20),
};

export const IsDisabled: Story<ValenceRangeCalendarProps<DateValue>> =
  RangeCalendarRender.bind({});
IsDisabled.args = {
  defaultValue: {
    start: new CalendarDate(2019, 6, 5),
    end: new CalendarDate(2019, 6, 10),
  },
  isDisabled: true,
};

export const IsDateUnavailable: Story<ValenceRangeCalendarProps<DateValue>> =
  RangeCalendarRender.bind({});
IsDateUnavailable.args = {
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

export const IsDateUnavailableAllowsNonContiguousRanges: Story<
  ValenceRangeCalendarProps<DateValue>
> = RangeCalendarRender.bind({});
IsDateUnavailableAllowsNonContiguousRanges.args = {
  isDateUnavailable: (date: DateValue) => isWeekend(date, locale),
  allowsNonContiguousRanges: true,
};

export const IsReadOnly: Story<ValenceRangeCalendarProps<DateValue>> =
  RangeCalendarRender.bind({});
IsReadOnly.args = {
  defaultValue: {
    start: new CalendarDate(2019, 6, 5),
    end: new CalendarDate(2019, 6, 10),
  },
  isReadOnly: true,
};

export const AutoFocus: Story<ValenceRangeCalendarProps<DateValue>> =
  RangeCalendarRender.bind({});
AutoFocus.args = {
  defaultValue: {
    start: new CalendarDate(2019, 6, 5),
    end: new CalendarDate(2019, 6, 10),
  },
  autoFocus: true,
};

export const VisibleMonths_2: Story<ValenceRangeCalendarProps<DateValue>> =
  RangeCalendarRender.bind({});
VisibleMonths_2.args = { visibleMonths: 2 };

export const MinValueTodayVisibleMonths_3: Story<
  ValenceRangeCalendarProps<DateValue>
> = RangeCalendarRender.bind({});
MinValueTodayVisibleMonths_3.args = { visibleMonths: 3 };

export const ValidationStateInvalid: Story<
  ValenceRangeCalendarProps<DateValue>
> = RangeCalendarRender.bind({});
ValidationStateInvalid.args = {
  validationState: "invalid",
  defaultValue: {
    start: new CalendarDate(2021, 10, 5),
    end: new CalendarDate(2021, 10, 14),
  },
};

export const ValidationStateInvalidErrorMessage: Story<
  ValenceRangeCalendarProps<DateValue>
> = RangeCalendarRender.bind({});
ValidationStateInvalidErrorMessage.args = {
  validationState: "invalid",
  errorMessage: "Selection may not include weekends.",
  defaultValue: {
    start: new CalendarDate(2021, 10, 5),
    end: new CalendarDate(2021, 10, 14),
  },
};

export const ValidationStateInvalidIsDateUnavailable: Story<
  ValenceRangeCalendarProps<DateValue>
> = RangeCalendarRender.bind({});
ValidationStateInvalidIsDateUnavailable.args = {
  validationState: "invalid",
  errorMessage: "Selection may not include weekends.",
  defaultValue: {
    start: new CalendarDate(2021, 10, 5),
    end: new CalendarDate(2021, 10, 14),
  },
};

export const ValidationStateValid: Story<ValenceRangeCalendarProps<DateValue>> =
  RangeCalendarRender.bind({});
ValidationStateValid.args = {
  validationState: "valid",
  allowsNonContiguousRanges: true,
  defaultValue: {
    start: new CalendarDate(2021, 10, 3),
    end: new CalendarDate(2021, 10, 16),
  },
};
