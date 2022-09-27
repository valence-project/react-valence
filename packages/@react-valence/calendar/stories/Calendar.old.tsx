import { Story as _Story } from "@ladle/react";
import { Calendar } from "@react-valence/calendar";
import { DateValue, ValenceCalendarProps } from "@types-valence/calendar";

/**
 * Helper type so `bind` returns the actual Story type.
 * From Adobe, might not need
 */

interface Story<T> extends _Story<T> {
  bind: (
    this: ThisParameterType<typeof Function.bind>,
    thisArg: Parameters<typeof Function.bind>[0],
    ...argArray: Parameters<typeof Function.bind>[1][]
  ) => _Story<T>;
}

export default {
  title: "Calendar",
  component: Calendar
};

const AccordionRenderPropsTemplate: Story<ValenceCalendarProps<DateValue>> = (
  args
) => (
    <Calendar {...args}/>
);

export const Default = AccordionRenderPropsTemplate.bind({});
Default.storyName = "Default";
Default.args = {
};