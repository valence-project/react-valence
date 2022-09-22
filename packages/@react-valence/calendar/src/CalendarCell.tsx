import React, { useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { AriaCalendarCellProps, useCalendarCell } from "@react-aria/calendar";
import {
  CalendarDate,
  getDayOfWeek,
  isSameDay,
  isSameMonth,
  isToday,
} from "@internationalized/date";
import { mergeProps } from "@react-aria/utils";
import { useFocusRing } from "@react-aria/focus";
import { useHover } from "@react-aria/interactions";
import { useLocale } from "@react-aria/i18n";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { CalendarState, RangeCalendarState } from "@react-stately/calendar";

// @react-valence https://valence.austinpittman.net
import { classNames } from "@react-valence/utils";

// @valence-styles
import styles from "@valence-styles/components/calendar/vars.module.scss";

interface CalendarCellProps extends AriaCalendarCellProps {
  state: CalendarState | RangeCalendarState;
  currentMonth: CalendarDate;
}

export function CalendarCell({
  state,
  currentMonth,
  ...props
}: CalendarCellProps) {
  let ref = useRef<HTMLElement>();
  let {
    cellProps,
    buttonProps,
    isPressed,
    isSelected,
    isDisabled,
    isFocused,
    isInvalid,
    formattedDate,
  } = useCalendarCell(
    {
      ...props,
      isDisabled: !isSameMonth(props.date, currentMonth),
    },
    state,
    ref
  );
  let isUnavailable = state.isCellUnavailable(props.date) && !isDisabled;
  let isLastSelectedBeforeDisabled =
    !isDisabled &&
    !isInvalid &&
    state.isCellUnavailable(props.date.add({ days: 1 }));
  let isFirstSelectedAfterDisabled =
    !isDisabled &&
    !isInvalid &&
    state.isCellUnavailable(props.date.subtract({ days: 1 }));
  let highlightedRange = "highlightedRange" in state && state.highlightedRange;
  let isSelectionStart =
    isSelected &&
    highlightedRange &&
    isSameDay(props.date, highlightedRange.start);
  let isSelectionEnd =
    isSelected &&
    highlightedRange &&
    isSameDay(props.date, highlightedRange.end);
  let { locale } = useLocale();
  let dayOfWeek = getDayOfWeek(props.date, locale);
  let isRangeStart =
    isSelected &&
    (isFirstSelectedAfterDisabled || dayOfWeek === 0 || props.date.day === 1);
  let isRangeEnd =
    isSelected &&
    (isLastSelectedBeforeDisabled ||
      dayOfWeek === 6 ||
      props.date.day === currentMonth.calendar.getDaysInMonth(currentMonth));
  let { focusProps, isFocusVisible } = useFocusRing();
  let { hoverProps, isHovered } = useHover({
    isDisabled: isDisabled || isUnavailable || state.isReadOnly,
  });

  return (
    <td
      {...cellProps}
      className={classNames(styles, "Calendar-tableCell")}
    >
      <span
        {...mergeProps(buttonProps, hoverProps, focusProps)}
        ref={ref}
        className={classNames(styles, "Calendar-date", {
          "is-today": isToday(props.date, state.timeZone),
          "is-selected": isSelected,
          "is-focused": isFocused && isFocusVisible,
          // Style disabled (i.e. out of min/max range), but selected dates as unavailable
          // since it is more clear than trying to dim the selection.
          "is-disabled": isDisabled && !isInvalid,
          "is-unavailable": isUnavailable || (isInvalid && isDisabled),
          "is-outsideMonth": !isSameMonth(props.date, currentMonth),
          "is-range-start": isRangeStart,
          "is-range-end": isRangeEnd,
          "is-range-selection": isSelected && "highlightedRange" in state,
          "is-selection-start": isSelectionStart,
          "is-selection-end": isSelectionEnd,
          "is-hovered": isHovered,
          "is-pressed": isPressed && !state.isReadOnly,
          "is-invalid": isInvalid,
        })}
      >
        <span className={classNames(styles, "Calendar-dateText")}>
          <span>{formattedDate}</span>
        </span>
      </span>
    </td>
  );
}
