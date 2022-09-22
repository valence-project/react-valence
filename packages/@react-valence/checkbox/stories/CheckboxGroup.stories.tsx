import { Checkbox, CheckboxGroup } from "@react-valence/checkbox";
import { Story as _Story } from "@ladle/react";
import {ValenceCheckboxGroupProps} from "@types-valence/checkbox";

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
  title: "Checkbox Group",
  component: CheckboxGroup
};

const AccordionRenderPropsTemplate: Story<ValenceCheckboxGroupProps> = (
  args
) => (
    <CheckboxGroup {...args}>
      <Checkbox value="one">One</Checkbox>
      <Checkbox value="two">Two</Checkbox>
      <Checkbox value="three">Three</Checkbox>
    </CheckboxGroup>
);

export const Default = AccordionRenderPropsTemplate.bind({});
Default.storyName = "Default";
Default.args = {
  label: 'Recieve check'
};