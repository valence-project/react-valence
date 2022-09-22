import { ReactNode } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import {
  CalendarDate,
  CalendarDateTime,
  ZonedDateTime,
} from "@internationalized/date";

// @types-valence
import {
  AriaLabelingProps,
  DOMProps,
  RangeValue,
  StyleProps,
  ValidationState,
  ValueBase,
} from "@types-valence/shared";

export type DateValue = CalendarDate | CalendarDateTime | ZonedDateTime;
type MappedDateValue<T> = T extends ZonedDateTime
  ? ZonedDateTime
  : T extends CalendarDateTime
  ? CalendarDateTime
  : T extends CalendarDate
  ? CalendarDate
  : never;

export interface CalendarPropsBase {
  /** The minimum allowed date that a user may select. */
  minValue?: DateValue;
  /** The maximum allowed date that a user may select. */
  maxValue?: DateValue;
  /** Callback that is called for each date of the calendar. If it returns true, then the date is unavailable. */
  isDateUnavailable?: (date: DateValue) => boolean;
  /**
   * Whether the calendar is disabled.
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Whether the calendar value is immutable.
   * @default false
   */
  isReadOnly?: boolean;
  /**
   * Whether to automatically focus the calendar when it mounts.
   * @default false
   */
  autoFocus?: boolean;
  /** Controls the currently focused date within the calendar. */
  focusedValue?: DateValue;
  /** The date that is focused when the calendar first mounts (uncountrolled). */
  defaultFocusedValue?: DateValue;
  /** Handler that is called when the focused date changes. */
  onFocusChange?: (date: CalendarDate) => void;
  /** Whether the current selection is valid or invalid according to application logic. */
  validationState?: ValidationState;
  /** An error message to display when the selected value is invalid. */
  errorMessage?: ReactNode;
}

export type DateRange = RangeValue<DateValue>;
export interface CalendarProps<T extends DateValue>
  extends CalendarPropsBase,
    ValueBase<T, MappedDateValue<T>> {}
export interface RangeCalendarProps<T extends DateValue>
  extends CalendarPropsBase,
    ValueBase<RangeValue<T>, RangeValue<MappedDateValue<T>>> {
  /**
   * When combined with `isDateUnavailable`, determines whether non-contiguous ranges,
   * i.e. ranges containing unavailable dates, may be selected.
   */
  allowsNonContiguousRanges?: boolean;
}

export interface AriaCalendarProps<T extends DateValue>
  extends CalendarProps<T>,
    DOMProps,
    AriaLabelingProps {}

export interface AriaRangeCalendarProps<T extends DateValue>
  extends RangeCalendarProps<T>,
    DOMProps,
    AriaLabelingProps {}

export interface ValenceCalendarProps<T extends DateValue>
  extends AriaCalendarProps<T>,
    StyleProps {
  /**
   * The number of months to display at once. Up to 3 months are supported.
   * @default 1
   */
  visibleMonths?: number;
}

export interface ValenceRangeCalendarProps<T extends DateValue>
  extends AriaRangeCalendarProps<T>,
    StyleProps {
  /**
   * The number of months to display at once. Up to 3 months are supported.
   * @default 1
   */
  visibleMonths?: number;
}
