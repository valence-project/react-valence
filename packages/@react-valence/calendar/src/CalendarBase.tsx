import React, { HTMLAttributes, RefObject } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import {
  useDateFormatter,
  useLocale,
  useLocalizedStringFormatter,
} from "@react-aria/i18n";
import { VisuallyHidden } from "@react-aria/visually-hidden";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { CalendarState, RangeCalendarState } from "@react-stately/calendar";

// @react-valence https://valence.austinpittman.net
import { ActionButton } from "@react-valence/button";
import { classNames, useStyleProps } from "@react-valence/utils";
import { HelpText } from "@react-valence/label";

// @types-valence
import { AriaButtonProps } from "@types-valence/button";
import { CalendarPropsBase } from "@types-valence/calendar";
import { DOMProps, StyleProps } from "@types-valence/shared";

// @valence-icons
import ChevronLeft from "@valence-icons/ui/ArrowLeftSLine";
import ChevronRight from "@valence-icons/ui/ArrowRightSLine";

// @valence-styles
import styles from "@valence-styles/components/calendar/vars.module.scss";

import { CalendarMonth } from "./CalendarMonth";

import intlMessages from "../intl";

interface CalendarBaseProps<T extends CalendarState | RangeCalendarState>
  extends CalendarPropsBase,
    DOMProps,
    StyleProps {
  state: T;
  visibleMonths?: number;
  calendarProps: HTMLAttributes<HTMLElement>;
  nextButtonProps: AriaButtonProps;
  prevButtonProps: AriaButtonProps;
  errorMessageProps: HTMLAttributes<HTMLElement>;
  calendarRef: RefObject<HTMLDivElement>;
}

export function CalendarBase<T extends CalendarState | RangeCalendarState>(
  props: CalendarBaseProps<T>
) {
  let {
    state,
    calendarProps,
    nextButtonProps,
    prevButtonProps,
    errorMessageProps,
    calendarRef: ref,
    visibleMonths = 1,
  } = props;
  let { styleProps } = useStyleProps(props);
  let stringFormatter = useLocalizedStringFormatter(intlMessages);
  let { direction } = useLocale();
  let currentMonth = state.visibleRange.start;
  let monthDateFormatter = useDateFormatter({
    month: "long",
    year: "numeric",
    era:
      currentMonth.calendar.identifier === "gregory" &&
      currentMonth.era === "BC"
        ? "short"
        : undefined,
    calendar: currentMonth.calendar.identifier,
    timeZone: state.timeZone,
  });

  let titles = [];
  let calendars = [];
  for (let i = 0; i < visibleMonths; i++) {
    let d = currentMonth.add({ months: i });
    titles.push(
      <div
        key={i}
        className={classNames(styles, "Calendar-monthHeader")}
      >
        {i === 0 && (
          <ActionButton
            {...prevButtonProps}
            UNSAFE_className={classNames(styles, "Calendar-prevMonth")}
            isQuiet
          >
            {direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </ActionButton>
        )}
        <h2
          // We have a visually hidden heading describing the entire visible range,
          // and the calendar itself describes the individual month
          // so we don't need to repeat that here for screen reader users.
          aria-hidden
          className={classNames(styles, "Calendar-title")}
        >
          {monthDateFormatter.format(d.toDate(state.timeZone))}
        </h2>
        {i === visibleMonths - 1 && (
          <ActionButton
            {...nextButtonProps}
            UNSAFE_className={classNames(styles, "Calendar-nextMonth")}
            isQuiet
          >
            {direction === "rtl" ? <ChevronLeft /> : <ChevronRight />}
          </ActionButton>
        )}
      </div>
    );

    calendars.push(
      <CalendarMonth {...props} key={i} state={state} startDate={d} />
    );
  }

  return (
    <div
      {...styleProps}
      {...calendarProps}
      ref={ref}
      className={classNames(styles, "Calendar", styleProps.className)}
    >
      {/* Add a screen reader only description of the entire visible range rather than
       * a separate heading above each month grid. This is placed first in the DOM order
       * so that it is the first thing a touch screen reader user encounters.
       * In addition, VoiceOver on iOS does not announce the aria-label of the grid
       * elements, so the aria-label of the Calendar is included here as well. */}
      <VisuallyHidden>
        <h2>{calendarProps["aria-label"]}</h2>
      </VisuallyHidden>
      <div className={classNames(styles, "Calendar-header")}>
        {titles}
      </div>
      <div className={classNames(styles, "Calendar-months")}>
        {calendars}
      </div>
      {/* For touch screen readers, add a visually hidden next button after the month grid
       * so it's easy to navigate after reaching the end without going all the way
       * back to the start of the month. */}
      <VisuallyHidden>
        <button
          aria-label={nextButtonProps["aria-label"]}
          disabled={nextButtonProps.isDisabled}
          onClick={() => state.focusNextPage()}
          tabIndex={-1}
        />
      </VisuallyHidden>
      {state.validationState === "invalid" && (
        <HelpText
          showErrorIcon
          errorMessage={
            props.errorMessage ||
            stringFormatter.format("invalidSelection", {
              selectedCount: "highlightedRange" in state ? 2 : 1,
            })
          }
          errorMessageProps={errorMessageProps}
          validationState="invalid"
          // Intentionally a global class name so it can be targeted in DatePicker CSS...
          UNSAFE_className="Calendar-helpText"
        />
      )}
    </div>
  );
}
