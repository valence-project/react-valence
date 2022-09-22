import { Story as _Story } from "@ladle/react";
import { TextField } from "@react-valence/textfield";
import React from "react";

import {ValenceTextFieldProps} from '@types-valence/textfield';

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
  title: "TextField",
  component: TextField
};

const AccordionRenderPropsTemplate: Story<ValenceTextFieldProps> = (
  args
) => (
    <TextField {...args} UNSAFE_style={{lineHeight: -1}}/>
);

export const Default = AccordionRenderPropsTemplate.bind({});
Default.storyName = "Default";
Default.args = {
  label: 'hello',
  validationState: 'invalid'
};