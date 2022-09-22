import { NumberField } from "@react-valence/numberfield";
import { Story as _Story } from "@ladle/react";
import {ValenceNumberFieldProps} from "@types-valence/numberfield";

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
  title: "Numberfield",
  component: NumberField
};

const AccordionRenderPropsTemplate: Story<ValenceNumberFieldProps> = (
  args
) => (
    <NumberField {...args}/>
);

export const Default = AccordionRenderPropsTemplate.bind({});
Default.storyName = "Default";
Default.args = {
  label: 'Best Number',
  validationState: 'valid'
};