/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import { action, Story } from "@ladle/react";
import {
  CalendarDate,
  CalendarDateTime,
  getLocalTimeZone,
  isWeekend,
  parseZonedDateTime,
  today,
} from "@internationalized/date";
import { classNames } from "@react-valence/utils";
import { DateValue } from "@react-types/calendar";
import { Flex } from "@react-valence/layout";
import { RangeCalendar } from "../";
import { useState } from "react";
import { storiesOf } from "@storybook/react";
import styles from "@adobe/spectrum-css-temp/components/calendar/vars.css";
import { TimeField } from "@react-valence/datepicker";
import { useLocale } from "@react-aria/i18n";
import { View } from "@react-valence/view";

storiesOf("Date and Time/RangeCalendar", module)
  .add("Default", () => render())
  .add("defaultValue", () =>
    render({
      defaultValue: {
        start: new CalendarDate(2019, 6, 5),
        end: new CalendarDate(2019, 6, 10),
      },
    })
  )
  .add("controlled value", () =>
    render({
      value: {
        start: new CalendarDate(2019, 6, 5),
        end: new CalendarDate(2019, 6, 10),
      },
    })
  )
  .add("with time", () => <RangeCalendarWithTime />)
  .add("with zoned time", () => <RangeCalendarWithZonedTime />)
  .add("minValue: today, maxValue: 1 week from now", () =>
    render({
      minValue: today(getLocalTimeZone()),
      maxValue: today(getLocalTimeZone()).add({ weeks: 1 }),
    })
  )
  .add("defaultValue + minValue + maxValue", () =>
    render({
      defaultValue: {
        start: new CalendarDate(2019, 6, 10),
        end: new CalendarDate(2019, 6, 12),
      },
      minValue: new CalendarDate(2019, 6, 5),
      maxValue: new CalendarDate(2019, 6, 20),
    })
  )
  .add("isDisabled", () =>
    render({
      defaultValue: {
        start: new CalendarDate(2019, 6, 5),
        end: new CalendarDate(2019, 6, 10),
      },
      isDisabled: true,
    })
  )
  .add("isDateUnavailable", () =>
    render({
      isDateUnavailable: (date: DateValue) => {
        const disabledIntervals = [
          [
            today(getLocalTimeZone()),
            today(getLocalTimeZone()).add({ weeks: 1 }),
          ],
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
    })
  )
  .add("isDateUnavailable, allowsNonContiguousRanges", () => {
    let { locale } = useLocale();
    return render({
      isDateUnavailable: (date: DateValue) => isWeekend(date, locale),
      allowsNonContiguousRanges: true,
    });
  })
  .add("isReadOnly", () =>
    render({
      defaultValue: {
        start: new CalendarDate(2019, 6, 5),
        end: new CalendarDate(2019, 6, 10),
      },
      isReadOnly: true,
    })
  )
  .add("autoFocus", () =>
    render({
      defaultValue: {
        start: new CalendarDate(2019, 6, 5),
        end: new CalendarDate(2019, 6, 10),
      },
      autoFocus: true,
    })
  )
  .add("visibleMonths: 2", () => render({ visibleMonths: 2 }))
  .add("visibleMonths: 3", () => render({ visibleMonths: 3 }))
  .add("minValue: today, visibleMonths: 3", () =>
    render({ minValue: today(getLocalTimeZone()), visibleMonths: 3 })
  )
  .add("defaultValue, visibleMonths: 3", () =>
    render({
      visibleMonths: 3,
      defaultValue: {
        start: new CalendarDate(2021, 10, 5),
        end: new CalendarDate(2021, 12, 10),
      },
    })
  )
  .add("validationState: invalid", () =>
    render({
      validationState: "invalid",
      defaultValue: {
        start: new CalendarDate(2021, 10, 5),
        end: new CalendarDate(2021, 10, 14),
      },
    })
  )
  .add("validationState: invalid, errorMessage", () =>
    render({
      validationState: "invalid",
      errorMessage: "Selection may not include weekends.",
      defaultValue: {
        start: new CalendarDate(2021, 10, 5),
        end: new CalendarDate(2021, 10, 14),
      },
    })
  )
  .add("isDateUnavailable, invalid", () => {
    let { locale } = useLocale();
    return render({
      isDateUnavailable: (date: DateValue) => isWeekend(date, locale),
      allowsNonContiguousRanges: true,
      defaultValue: {
        start: new CalendarDate(2021, 10, 3),
        end: new CalendarDate(2021, 10, 16),
      },
    });
  });

function render(props = {}) {
  return (
    <View maxWidth="100vw" overflow="auto">
      <RangeCalendar onChange={action("change")} {...props} />
    </View>
  );
}

function RangeCalendarWithTime() {
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
}

function RangeCalendarWithZonedTime() {
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
}
