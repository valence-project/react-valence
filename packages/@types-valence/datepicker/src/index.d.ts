// @react-aria https://react-spectrum.adobe.com/react-aria/
import {
  CalendarDate,
  CalendarDateTime,
  Time,
  ZonedDateTime,
} from "@internationalized/date";

// @types-valence
import {
  AriaLabelingProps,
  DOMProps,
  FocusableProps,
  HelpTextProps,
  InputBase,
  LabelableProps,
  RangeValue,
  ValenceLabelableProps,
  StyleProps,
  Validation,
  ValueBase,
} from "@types-valence/shared";
import { OverlayTriggerProps } from "@types-valence/overlays";

export type DateValue = CalendarDate | CalendarDateTime | ZonedDateTime;
type MappedDateValue<T> = T extends ZonedDateTime
  ? ZonedDateTime
  : T extends CalendarDateTime
  ? CalendarDateTime
  : T extends CalendarDate
  ? CalendarDate
  : never;

export type Granularity = "day" | "hour" | "minute" | "second";
interface DatePickerBase<T extends DateValue>
  extends InputBase,
    Validation,
    FocusableProps,
    LabelableProps,
    HelpTextProps,
    OverlayTriggerProps {
  /** The minimum allowed date that a user may select. */
  minValue?: DateValue;
  /** The maximum allowed date that a user may select. */
  maxValue?: DateValue;
  /** Callback that is called for each date of the calendar. If it returns true, then the date is unavailable. */
  isDateUnavailable?: (date: DateValue) => boolean;
  /** A placeholder date that influences the format of the placeholder shown when no value is selected. Defaults to today's date at midnight. */
  placeholderValue?: T;
  /** Whether to display the time in 12 or 24 hour format. By default, this is determined by the user's locale. */
  hourCycle?: 12 | 24;
  /** Determines the smallest unit that is displayed in the date picker. By default, this is `"day"` for dates, and `"minute"` for times. */
  granularity?: Granularity;
  /**
   * Whether to hide the time zone abbreviation.
   * @default false
   */
  hideTimeZone?: boolean;
}

export interface AriaDatePickerBaseProps<T extends DateValue>
  extends DatePickerBase<T>,
    AriaLabelingProps,
    DOMProps {}

export interface DatePickerProps<T extends DateValue>
  extends DatePickerBase<T>,
    ValueBase<T, MappedDateValue<T>> {}
export interface AriaDatePickerProps<T extends DateValue>
  extends AriaDatePickerBaseProps<T>,
    DatePickerProps<T> {}

export type DateRange = RangeValue<DateValue>;
export interface DateRangePickerProps<T extends DateValue>
  extends DatePickerBase<T>,
    ValueBase<RangeValue<T>, RangeValue<MappedDateValue<T>>> {
  /**
   * When combined with `isDateUnavailable`, determines whether non-contiguous ranges,
   * i.e. ranges containing unavailable dates, may be selected.
   */
  allowsNonContiguousRanges?: boolean;
}

export interface AriaDateRangePickerProps<T extends DateValue>
  extends AriaDatePickerBaseProps<T>,
    DateRangePickerProps<T> {}

interface ValenceDatePickerBase<T extends DateValue>
  extends AriaDatePickerBaseProps<T>,
    ValenceLabelableProps,
    StyleProps {
  /**
   * Whether the date picker should be displayed with a quiet style.
   * @default false
   */
  isQuiet?: boolean;
  /**
   * Whether to show the localized date format as help text below the field.
   * @default false
   */
  showFormatHelpText?: boolean;
  /**
   * The maximum number of months to display at once in the calendar popover, if screen space permits.
   * @default 1
   */
  maxVisibleMonths?: number;
  /**
   * Whether the calendar popover should automatically flip direction when space is limited.
   * @default true
   */
  shouldFlip?: boolean;
}

export interface ValenceDatePickerProps<T extends DateValue>
  extends DatePickerProps<T>,
    ValenceDatePickerBase<T> {}
export interface ValenceDateRangePickerProps<T extends DateValue>
  extends DateRangePickerProps<T>,
    ValenceDatePickerBase<T> {}
export interface ValenceDateFieldProps<T extends DateValue>
  extends Omit<ValenceDatePickerProps<T>, "maxVisibleMonths"> {}

export type TimeValue = Time | CalendarDateTime | ZonedDateTime;
type MappedTimeValue<T> = T extends ZonedDateTime
  ? ZonedDateTime
  : T extends CalendarDateTime
  ? CalendarDateTime
  : T extends Time
  ? Time
  : never;

export interface TimePickerProps<T extends TimeValue>
  extends InputBase,
    Validation,
    FocusableProps,
    LabelableProps,
    HelpTextProps,
    ValueBase<T, MappedTimeValue<T>> {
  /** Whether to display the time in 12 or 24 hour format. By default, this is determined by the user's locale. */
  hourCycle?: 12 | 24;
  /**
   * Determines the smallest unit that is displayed in the time picker.
   * @default 'minute'
   */
  granularity?: "hour" | "minute" | "second";
  /** Whether to hide the time zone abbreviation. */
  hideTimeZone?: boolean;
  /**
   * A placeholder time that influences the format of the placeholder shown when no value is selected.
   * Defaults to 12:00 AM or 00:00 depending on the hour cycle.
   */
  placeholderValue?: T;
  /** The minimum allowed time that a user may select. */
  minValue?: TimeValue;
  /** The maximum allowed time that a user may select. */
  maxValue?: TimeValue;
}

export interface AriaTimeFieldProps<T extends TimeValue>
  extends TimePickerProps<T>,
    AriaLabelingProps,
    DOMProps {}

export interface ValenceTimeFieldProps<T extends TimeValue>
  extends AriaTimeFieldProps<T>,
    ValenceLabelableProps,
    StyleProps {
  /**
   * Whether the time field should be displayed with a quiet style.
   * @default false
   */
  isQuiet?: boolean;
}

// backward compatibility
export type ValenceTimePickerProps<T extends TimeValue> =
  ValenceTimeFieldProps<T>;
