import {
  CalendarDate,
  CalendarDateTime,
  Time,
  ZonedDateTime,
} from "@internationalized/date";
import { Story } from "@ladle/react";
import { StaticField } from "@react-valence/staticfield";

import { ValenceStaticFieldProps } from "@react-valence/staticfield";

export default {
  title: "StaticField",
  component: StaticField,
  argTypes: {
    labelPosition: {
      control: {
        type: "radio",
        options: [null, "top", "side"],
      },
    },
    labelAlign: {
      control: {
        type: "radio",
        options: ["start", "end"],
      },
    },
    width: {
      control: {
        type: "radio",
        options: [null, "300px", "600px"],
      },
    },
  },
};

const StaticFieldRender: Story<ValenceStaticFieldProps<object>> = (props) => {
  return <StaticField {...props} />;
};

export let Default = StaticFieldRender.bind({});
Default.args = { label: "Test", value: "foo ".repeat(20) };
Default.storyName = "String";

export let StringArray = StaticFieldRender.bind({});
StringArray.args = { ...Default.args, value: ["wow", "cool", "awesome"] };
StringArray.storyName = "String array";

export let CalendarDateType = StaticFieldRender.bind({});
CalendarDateType.args = {
  ...Default.args,
  value: new CalendarDate(2019, 6, 5),
  formatOptions: { dateStyle: "medium" },
};
CalendarDateType.storyName = "CalendarDate";

export let CalendarDateTimeType = StaticFieldRender.bind({});
CalendarDateTimeType.args = {
  ...Default.args,
  value: new CalendarDateTime(2020, 2, 3, 12, 23, 24, 120),
  formatOptions: { dateStyle: "medium", timeStyle: "medium" },
};
CalendarDateTimeType.storyName = "CalendarDateTime";

export let ZonedDateTimeType = StaticFieldRender.bind({});
ZonedDateTimeType.args = {
  ...Default.args,
  value: new ZonedDateTime(2020, 2, 3, "America/Los_Angeles", -28800000),
  formatOptions: { dateStyle: "long", timeStyle: "long" },
};
ZonedDateTimeType.storyName = "ZonedDateTime";

export let DateType = StaticFieldRender.bind({});
DateType.args = {
  ...Default.args,
  value: new Date(2000, 5, 5),
  formatOptions: { dateStyle: "long" },
};
DateType.storyName = "Date";

export let TimeType = StaticFieldRender.bind({});
TimeType.args = {
  ...Default.args,
  value: new Time(9, 45),
  formatOptions: { timeStyle: "short" },
};
TimeType.storyName = "Time";

export let CalendarDateRange = StaticFieldRender.bind({});
CalendarDateRange.args = {
  ...Default.args,
  value: {
    start: new CalendarDate(2019, 6, 5),
    end: new CalendarDate(2019, 7, 5),
  },
  formatOptions: { dateStyle: "medium" },
};
CalendarDateRange.storyName = "RangeValue<CalendarDate>";

export let CalendarDateTimeRange = StaticFieldRender.bind({});
CalendarDateTimeRange.args = {
  ...Default.args,
  value: {
    start: new CalendarDateTime(2020, 2, 3, 12, 23, 24, 120),
    end: new CalendarDateTime(2020, 3, 3, 12, 23, 24, 120),
  },
  formatOptions: { dateStyle: "medium", timeStyle: "medium" },
};
CalendarDateTimeRange.storyName = "RangeValue<CalendarDateTime>";

export let ZonedDateTimeRange = StaticFieldRender.bind({});
ZonedDateTimeRange.args = {
  ...Default.args,
  value: {
    start: new ZonedDateTime(2020, 2, 3, "America/Los_Angeles", -28800000),
    end: new ZonedDateTime(2020, 3, 3, "America/Los_Angeles", -28800000),
  },
  formatOptions: { dateStyle: "medium", timeStyle: "medium" },
};
ZonedDateTimeRange.storyName = "RangeValue<ZonedDateTime>";

export let DateRange = StaticFieldRender.bind({});
DateRange.args = {
  ...Default.args,
  value: { start: new Date(2019, 6, 5), end: new Date(2019, 6, 10) },
  formatOptions: { dateStyle: "medium" },
};
DateRange.storyName = "RangeValue<Date>";

export let TimeRange = StaticFieldRender.bind({});
TimeRange.args = {
  ...Default.args,
  value: { start: new Time(9, 45), end: new Time(10, 50) },
  formatOptions: { timeStyle: "short" },
};
TimeRange.storyName = "RangeValue<Time>";

export let Number = StaticFieldRender.bind({});
Number.args = { ...Default.args, value: 10 };
Number.storyName = "Number";

export let NumberRange = StaticFieldRender.bind({});
NumberRange.args = { ...Default.args, value: { start: 10, end: 20 } };
NumberRange.storyName = "RangeValue<Number>";
