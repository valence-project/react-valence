import React from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import {
  CalendarDate,
  endOfMonth,
  getWeeksInMonth,
} from "@internationalized/date";
import { useCalendarGrid } from "@react-aria/calendar";
import { useLocale } from "@react-aria/i18n";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { CalendarState, RangeCalendarState } from "@react-stately/calendar";

// @react-valence https://valence.austinpittman.net
import { classNames } from "@react-valence/utils";

// @types-valence
import { CalendarPropsBase } from "@types-valence/calendar";
import { DOMProps, StyleProps } from "@types-valence/shared";

// @valence-styles
import styles from "@valence-styles/components/calendar/vars.module.scss";

import { CalendarCell } from "./CalendarCell";

interface CalendarMonthProps extends CalendarPropsBase, DOMProps, StyleProps {
  state: CalendarState | RangeCalendarState;
  startDate: CalendarDate;
}

export function CalendarMonth(props: CalendarMonthProps) {
  let { state, startDate } = props;
  let { gridProps, headerProps, weekDays } = useCalendarGrid(
    {
      ...props,
      endDate: endOfMonth(startDate),
    },
    state
  );

  let { locale } = useLocale();
  let weeksInMonth = getWeeksInMonth(startDate, locale);

  return (
    <table
      {...{
        ...gridProps,
        className: classNames(styles, "Calendar-body", "Calendar-table"),
      }}
    >
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => (
            <th
              key={index}
              className={classNames(styles, "Calendar-tableCell")}
            >
              <span className={classNames(styles, "Calendar-dayOfWeek")}>
                {day}
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex, startDate)
              .map((date, i) =>
                date ? (
                  <CalendarCell
                    key={i}
                    state={state}
                    date={date}
                    currentMonth={startDate}
                  />
                ) : (
                  <td key={i} />
                )
              )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
