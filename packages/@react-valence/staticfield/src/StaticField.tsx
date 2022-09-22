import React, { RefObject } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import {
  CalendarDate,
  CalendarDateTime,
  getLocalTimeZone,
  Time,
  toCalendarDateTime,
  today,
  ZonedDateTime,
} from "@internationalized/date";
import { filterDOMProps } from "@react-aria/utils";
import {
  useDateFormatter,
  useListFormatter,
  useNumberFormatter,
} from "@react-aria/i18n";

// @react-valence https://valence.austinpittman.net
import { classNames } from "@react-valence/utils";
import { Label } from "@react-valence/label";
import { useStyleProps } from "@react-valence/utils";

// @types-valence
import type {
  AriaLabelingProps,
  DOMProps,
  RangeValue,
  ValenceLabelableProps,
  StyleProps,
} from "@types-valence/shared";

// @valence-styles
import labelStyles from "@valence-styles/components/fieldlabel/vars.module.scss";

interface StaticFieldBaseProps
  extends DOMProps,
    StyleProps,
    Omit<ValenceLabelableProps, "necessityIndicator" | "isRequired">,
    AriaLabelingProps {}

type NumberValue = number | RangeValue<number>;
interface NumberProps<T extends NumberValue> {
  value: T;
  formatOptions?: Intl.NumberFormatOptions;
}

type DateTime = Date | CalendarDate | CalendarDateTime | ZonedDateTime | Time;
type RangeDateTime = RangeValue<DateTime>;
type DateTimeValue = DateTime | RangeDateTime;
interface DateProps<T extends DateTimeValue> {
  value: T;
  formatOptions?: Intl.DateTimeFormatOptions;
}

interface StringProps<T extends string> {
  value: T;
  formatOptions?: never;
}

interface StringListProps<T extends string[]> {
  value: T;
  // @ts-ignore
  formatOptions?: Intl.ListFormatOptions;
}

type StaticFieldProps<T> = T extends NumberValue
  ? NumberProps<T>
  : T extends DateTimeValue
  ? DateProps<T>
  : T extends string[]
  ? StringListProps<T>
  : T extends string
  ? StringProps<T>
  : never;

export type ValenceStaticFieldTypes =
  | string[]
  | string
  | Date
  | CalendarDate
  | CalendarDateTime
  | ZonedDateTime
  | Time
  | number
  | RangeValue<number>
  | RangeValue<DateTime>;
export type ValenceStaticFieldProps<T> = StaticFieldProps<T> &
  StaticFieldBaseProps;

function StaticField<T extends ValenceStaticFieldTypes>(
  props: ValenceStaticFieldProps<T>,
  ref: RefObject<HTMLDivElement>
) {
  let {
    value,
    formatOptions,
    labelPosition,
    labelAlign,
    label,
    ...otherProps
  } = props;
  let { styleProps } = useStyleProps(otherProps);
  let labelWrapperClass = classNames(labelStyles, "Field", {
    "Field--positionTop": labelPosition === "top",
    "Field--positionSide": labelPosition === "side",
  });

  return (
    <div
      {...filterDOMProps(props)}
      {...styleProps}
      className={classNames(
        labelStyles,
        "StaticField",
        { [labelWrapperClass]: label },
        styleProps.className
      )}
      ref={ref}
    >
      {props.label && (
        <Label
          labelPosition={labelPosition}
          labelAlign={labelAlign}
          elementType="span"
        >
          {props.label}
        </Label>
      )}
      <div className={classNames(labelStyles, "Field-wrapper")}>
        <div className={classNames(labelStyles, "Field-field")}>
          {Array.isArray(value) && (
            // @ts-ignore
            <FormattedStringList
              value={value}
              formatOptions={formatOptions as Intl.ListFormatOptions}
            />
          )}

          {typeof value === "object" &&
            "start" in value &&
            typeof value.start === "number" &&
            typeof value.end === "number" && (
              <FormattedNumber
                value={value as NumberValue}
                formatOptions={formatOptions as Intl.NumberFormatOptions}
              />
            )}

          {typeof value === "object" &&
            "start" in value &&
            typeof value.start !== "number" &&
            typeof value.end !== "number" && (
              <FormattedDate
                value={value as DateTimeValue}
                formatOptions={formatOptions as Intl.DateTimeFormatOptions}
              />
            )}

          {typeof value === "number" && (
            <FormattedNumber
              value={value}
              formatOptions={formatOptions as Intl.NumberFormatOptions}
            />
          )}

          {((typeof value === "object" &&
            ("calendar" in value || "hour" in value)) ||
            value instanceof Date) && (
            <FormattedDate
              value={value}
              formatOptions={formatOptions as Intl.DateTimeFormatOptions}
            />
          )}

          {typeof value === "string" && value}
        </div>
      </div>
    </div>
  );
}

function FormattedStringList<T extends string[]>(props: StringListProps<T>) {
  let stringFormatter = useListFormatter(props.formatOptions);

  return <>{stringFormatter.format(props.value)}</>;
}

function FormattedNumber<T extends NumberValue>(props: NumberProps<T>) {
  let numberFormatter = useNumberFormatter(props.formatOptions);
  let value = props.value;

  if (typeof value === "object") {
    return <>{numberFormatter.formatRange(value.start, value.end)}</>;
  }

  return <>{numberFormatter.format(value)}</>;
}

function FormattedDate<T extends DateTimeValue>(props: DateProps<T>) {
  let dateFormatter = useDateFormatter(props.formatOptions);
  let value = props.value;
  let timeZone = dateFormatter.resolvedOptions().timeZone || getLocalTimeZone();
  let final;

  if ("start" in value && "end" in value) {
    let start = value.start;
    let end = value.end;

    start = convertDateTime(start, timeZone);
    end = convertDateTime(end, timeZone);

    return <>{dateFormatter.formatRange(start, end)}</>;
  }

  final = convertDateTime(value, timeZone);
  return <>{dateFormatter.format(final)}</>;
}

function convertDateTime(value: DateTime, timeZone: any) {
  if ("timeZone" in value) {
    return value.toDate();
  } else if ("calendar" in value) {
    return value.toDate(timeZone);
  } else if (!(value instanceof Date)) {
    return convertValue(value).toDate(timeZone);
  }

  return value;
}

function convertValue(value: Time) {
  let date = today(getLocalTimeZone());

  return toCalendarDateTime(date, value);
}

let _StaticField = React.forwardRef(StaticField);
export { _StaticField as StaticField };
