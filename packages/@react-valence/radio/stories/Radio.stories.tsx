import { Radio, RadioGroup } from "@react-valence/radio";
import { Story as _Story } from "@ladle/react";
import {ValenceRadioGroupProps} from "@types-valence/radio";

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
  title: "Radio Group",
  component: RadioGroup
};

const AccordionRenderPropsTemplate: Story<ValenceRadioGroupProps> = (
  args
) => (
    <RadioGroup {...args}>
      <Radio value="one">One</Radio>
      <Radio value="two">Two</Radio>
      <Radio value="three">Three</Radio>
    </RadioGroup>
);

export const Default = AccordionRenderPropsTemplate.bind({});
Default.storyName = "Default";
Default.args = {
  label: 'Recieve check',
  validationState: 'invalid'
};