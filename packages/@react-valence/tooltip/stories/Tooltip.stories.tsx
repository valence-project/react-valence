import { Story as _Story } from "@ladle/react";
import { Tooltip } from "@react-valence/tooltip";
import BatteryHalf from "@valence-icons/ui/StopwatchFill";
import X from "@valence-icons/ui/ExclamationCircleFill";
import React from "react";

import {ValenceTooltipProps} from '@types-valence/tooltip';

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
  title: "Tooltip",
  component: Tooltip
};

const AccordionRenderPropsTemplate: Story<ValenceTooltipProps<ItemType>> = (
  args
) => (
    <Tooltip {...args}>{args.children}</Tooltip>
);

export const Default = AccordionRenderPropsTemplate.bind({});
Default.storyName = "Default";
Default.args = {
  isOpen: true,
  variant: 'info',
  children: "This is a tooltip",
};