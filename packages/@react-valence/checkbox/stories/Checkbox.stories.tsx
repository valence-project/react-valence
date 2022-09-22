import { Checkbox } from "@react-valence/checkbox";
import { Story as _Story } from "@ladle/react";
import { ValenceCheckboxProps } from "@types-valence/checkbox";

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
  title: "Checkbox",
  component: Checkbox,
};

const AccordionRenderPropsTemplate: Story<ValenceCheckboxProps> = (args) => (
  <Checkbox {...args} />
);

export const Default = AccordionRenderPropsTemplate.bind({});
Default.storyName = "Default";
Default.args = {
  children: "Recieve check",
};
