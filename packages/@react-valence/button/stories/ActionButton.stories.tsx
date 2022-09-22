import { Story as _Story } from "@ladle/react";
import { ActionButton } from "@react-valence/button";
import { Text } from "@react-valence/text";
import BatteryHalf from "@valence-icons/ui/GamepadFill";
import React from "react";

import {ValenceButtonProps} from '@types-valence/button';

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
  title: "ActionButton",
  component: ActionButton
};

const ActionButtonRender: Story<ValenceButtonProps<ItemType>> = (
  args
) => (
    <ActionButton>{args.label}</ActionButton>
);

const ActionButtonIconRender: Story<ValenceButtonProps<ItemType>> = (
  args
) => (
    <ActionButton>
      <BatteryHalf/>
      <Text>
        {args.label}
      </Text>
    </ActionButton>
);

export const Default = ActionButtonRender.bind({});
Default.storyName = "Text";
Default.args = {
  label: 'Text'
};

export const ButtonCTAIcon = ActionButtonIconRender.bind({});
ButtonCTAIcon.storyName = "Text and icon";
ButtonCTAIcon.args = {
  label: 'Text + Icon'
};