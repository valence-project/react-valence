import { Story as _Story } from "@ladle/react";
import { Picker, Item } from "@react-valence/picker";
import { Text } from "@react-valence/text";
import React from "react";

import {ValencePickerProps} from '@types-valence/select';

import ExclamationTriangleFill from '@valence-icons/ui/AliensFill';
import BandaidFill from '@valence-icons/ui/SkullFill';
import Robot from '@valence-icons/ui/RobotFill';

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
  title: "Picker",
  component: Picker
};

const AccordionRenderPropsTemplate: Story<ValencePickerProps<ItemType>> = (
  args
) => (
    <Picker {...args} width={'size-3000'}>
    <Item key="One" textValue="One"><ExclamationTriangleFill/><Text>One</Text><Text slot="description">Probably first</Text></Item>
    <Item key="Two" textValue="Two"><BandaidFill/><Text>Two</Text><Text slot="description">After One</Text></Item>
    <Item key="Three" textValue="Three"><Robot/><Text>Three</Text><Text slot="description">Following two</Text></Item>
    <Item key="Four" textValue="Four"><ExclamationTriangleFill/><Text>Four</Text><Text slot="description">Probably first</Text></Item>
    <Item key="Five" textValue="Five"><BandaidFill/><Text>Five</Text><Text slot="description">After One</Text></Item>
    <Item key="Six" textValue="Six"><Robot/><Text>Six</Text><Text slot="description">Following two</Text></Item>
    </Picker>
);

export const Default = AccordionRenderPropsTemplate.bind({});
Default.storyName = "Default";
Default.args = {
  label: 'Pick An Option',
  isLoading: true,
  validationState: 'invalid'
};