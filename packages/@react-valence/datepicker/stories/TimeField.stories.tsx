import { action, Story } from "@ladle/react";
import {
  CalendarDateTime,
  parseTime,
  parseZonedDateTime,
  Time,
  toZoned,
} from "@internationalized/date";
import React from "react";
import { TimeField } from "@react-valence/datepicker";

import { ValenceTimeFieldProps } from "@react-valence/datepicker";
import { TimeValue } from "@types-valence/datepicker";

const TimeFieldRender: Story<ValenceTimeFieldProps<TimeValue>> = (props) => {
  return (
    <TimeField
      label="Time"
      onChange={action("change")}
      maxWidth="calc(100vw - 40px)"
      {...props}
    />
  );
};

export const DefaultValue: Story<ValenceTimeFieldProps<TimeValue>> =
  TimeFieldRender.bind({});
DefaultValue.args = { defaultValue: parseTime("20:24") };

export const ControlledValue: Story<ValenceTimeFieldProps<TimeValue>> =
  TimeFieldRender.bind({});
ControlledValue.args = { value: new Time(2, 35) };

export const GranularitySecond: Story<ValenceTimeFieldProps<TimeValue>> =
  TimeFieldRender.bind({});
GranularitySecond.args = { granularity: "second" };

export const HourCycle_12: Story<ValenceTimeFieldProps<TimeValue>> =
  TimeFieldRender.bind({});
HourCycle_12.args = { hourCycle: 12, defaultValue: parseTime("00:00") };

export const HourCycle_24: Story<ValenceTimeFieldProps<TimeValue>> =
  TimeFieldRender.bind({});
HourCycle_24.args = { hourCycle: 24, defaultValue: parseTime("00:00") };

export const HourCycle_12GranularityHour: Story<
  ValenceTimeFieldProps<TimeValue>
> = TimeFieldRender.bind({});
HourCycle_12GranularityHour.args = { hourCycle: 12, granularity: "hour" };

export const HourCycle_24GranularityHour: Story<
  ValenceTimeFieldProps<TimeValue>
> = TimeFieldRender.bind({});
HourCycle_24GranularityHour.args = { hourCycle: 24, granularity: "hour" };

export const Zoned: Story<ValenceTimeFieldProps<TimeValue>> =
  TimeFieldRender.bind({});
Zoned.args = {
  defaultValue: parseZonedDateTime(
    "2021-11-07T00:45-07:00[America/Los_Angeles]"
  ),
};

export const HideTimeZone: Story<ValenceTimeFieldProps<TimeValue>> =
  TimeFieldRender.bind({});
HideTimeZone.args = {
  defaultValue: parseZonedDateTime(
    "2021-11-07T00:45-07:00[America/Los_Angeles]"
  ),
  hideTimeZone: true,
};

export const IsDisabled: Story<ValenceTimeFieldProps<TimeValue>> =
  TimeFieldRender.bind({});
IsDisabled.args = { isDisabled: true, value: new Time(2, 35) };

export const IsQuietIsDisabled: Story<ValenceTimeFieldProps<TimeValue>> =
  TimeFieldRender.bind({});
IsQuietIsDisabled.args = {
  isQuiet: true,
  isDisabled: true,
  value: new Time(2, 35),
};

export const IsReadOnly: Story<ValenceTimeFieldProps<TimeValue>> =
  TimeFieldRender.bind({});
IsReadOnly.args = { isReadOnly: true, value: new Time(2, 35) };

export const AutoFocus: Story<ValenceTimeFieldProps<TimeValue>> =
  TimeFieldRender.bind({});
AutoFocus.args = { autoFocus: true };

export const ValidationStateInvalid: Story<ValenceTimeFieldProps<TimeValue>> =
  TimeFieldRender.bind({});
ValidationStateInvalid.args = {
  validationState: "invalid",
  value: new Time(2, 35),
};

export const ValidationStateValid: Story<ValenceTimeFieldProps<TimeValue>> =
  TimeFieldRender.bind({});
ValidationStateValid.args = {
  validationState: "valid",
  value: new Time(2, 35),
};

export const PlaceholderValue_8Am: Story<ValenceTimeFieldProps<TimeValue>> =
  TimeFieldRender.bind({});
PlaceholderValue_8Am.args = { placeholderValue: new Time(8) };

export const PlaceholderValue_1980_1_1_8AmZoned: Story<
  ValenceTimeFieldProps<TimeValue>
> = TimeFieldRender.bind({});
PlaceholderValue_1980_1_1_8AmZoned.args = {
  placeholderValue: toZoned(
    new CalendarDateTime(1980, 1, 1, 8),
    "America/Los_Angeles"
  ),
};

export const MinValue_8Am: Story<ValenceTimeFieldProps<TimeValue>> =
  TimeFieldRender.bind({});
MinValue_8Am.args = { minValue: new Time(8) };

export const MaxValue_8Pm: Story<ValenceTimeFieldProps<TimeValue>> =
  TimeFieldRender.bind({});
MaxValue_8Pm.args = { maxValue: new Time(20) };

export const MinValue_8AmMaxValue_8Pm: Story<ValenceTimeFieldProps<TimeValue>> =
  TimeFieldRender.bind({});
MinValue_8AmMaxValue_8Pm.args = {
  minValue: new Time(8),
  maxValue: new Time(20),
};

export const IsQuiet: Story<ValenceTimeFieldProps<TimeValue>> =
  TimeFieldRender.bind({});
IsQuiet.args = { isQuiet: true };

export const LabelPositionSide: Story<ValenceTimeFieldProps<TimeValue>> =
  TimeFieldRender.bind({});
LabelPositionSide.args = { labelPosition: "side" };

export const LabelAlignEnd: Story<ValenceTimeFieldProps<TimeValue>> =
  TimeFieldRender.bind({});
LabelAlignEnd.args = { labelPosition: "top", labelAlign: "end" };

export const Required: Story<ValenceTimeFieldProps<TimeValue>> =
  TimeFieldRender.bind({});
Required.args = { isRequired: true };

export const RequiredWithLabel: Story<ValenceTimeFieldProps<TimeValue>> =
  TimeFieldRender.bind({});
RequiredWithLabel.args = { isRequired: true, necessityIndicator: "label" };

export const Optional: Story<ValenceTimeFieldProps<TimeValue>> =
  TimeFieldRender.bind({});
Optional.args = { necessityIndicator: "label" };

export const NoVisibleLabel: Story<ValenceTimeFieldProps<TimeValue>> =
  TimeFieldRender.bind({});
NoVisibleLabel.args = { "aria-label": "Time", label: null };

export const QuietNoVisibleLabel: Story<ValenceTimeFieldProps<TimeValue>> =
  TimeFieldRender.bind({});
QuietNoVisibleLabel.args = { isQuiet: true, "aria-label": "Time", label: null };

export const CustomWidth: Story<ValenceTimeFieldProps<TimeValue>> =
  TimeFieldRender.bind({});
CustomWidth.args = { width: "size-3000" };

export const QuietCustomWidth: Story<ValenceTimeFieldProps<TimeValue>> =
  TimeFieldRender.bind({});
QuietCustomWidth.args = { isQuiet: true, width: "size-3000" };

export const CustomWidthNoVisibleLabel: Story<
  ValenceTimeFieldProps<TimeValue>
> = TimeFieldRender.bind({});
CustomWidthNoVisibleLabel.args = {
  width: "size-3000",
  label: null,
  "aria-label": "Time",
};

export const CustomWidthLabelPositionSide: Story<
  ValenceTimeFieldProps<TimeValue>
> = TimeFieldRender.bind({});
CustomWidthLabelPositionSide.args = {
  width: "size-3000",
  labelPosition: "side",
};
