
import { DateField } from "@react-valence/datepicker";
import { Story as _Story } from "@ladle/react";
import { ValenceDateFieldProps, DateValue } from "@types-valence/datepicker";

type ItemType = {
  key: React.Key;
  title: string;
};

/**
 * Helper type so `bind` returns the actual Story type.
 */
interface Story<T> extends _Story<T> {
  bind: (
    this: ThisParameterType<typeof Function.bind>,
    thisArg: Parameters<typeof Function.bind>[0],
    ...argArray: Parameters<typeof Function.bind>[1][]
  ) => _Story<T>;
}


export default {
  title: "Date Field",
  component: DateField
};

const AccordionRenderPropsTemplate: Story<ValenceDateFieldProps<DateValue>> = (
  args
) => (
    <DateField {...args}/>
);

export const Default = AccordionRenderPropsTemplate.bind({});
Default.storyName = "Default";
Default.args = {
  label: 'Date'
};