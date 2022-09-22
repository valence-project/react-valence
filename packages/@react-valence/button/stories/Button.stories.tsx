import { Story as _Story } from "@ladle/react";
import { Button } from "@react-valence/button";
import { Text } from "@react-valence/text";
import BatteryHalf from "@valence-icons/ui/GamepadFill";
import X from "@valence-icons/ui/CloseFill";
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
  title: "Button",
  component: Button
};

const AccordionRenderPropsTemplate: Story<ValenceButtonProps<ItemType>> = (
  args
) => (
    <Button variant={args.variant}>{args.label}</Button>
);

const ButtonIconRender: Story<ValenceButtonProps<ItemType>> = (
  args
) => (
    <Button variant={args.variant}>
      <BatteryHalf/>
      <Text UNSAFE_className={'valence-Button-label'}>
        {args.label}
      </Text>
    </Button>
);


const ButtonWarningIconRender: Story<ValenceButtonProps<ItemType>> = (
  args
) => (
    <Button variant={args.variant}>
      <X/>
      <Text UNSAFE_className={'valence-Button-label'}>
        {args.label}
      </Text>
    </Button>
);

export const ButtonCTA = AccordionRenderPropsTemplate.bind({});
ButtonCTA.storyName = "Call to action";
ButtonCTA.args = {
  label: 'CTA Button',
  variant: 'cta'
};

export const ButtonCTAIcon = ButtonIconRender.bind({});
ButtonCTAIcon.storyName = "Call to action with icon";
ButtonCTAIcon.args = {
  label: 'CTA With Icon',
  variant: 'cta'
};

export const ButtonPrimary = AccordionRenderPropsTemplate.bind({});
ButtonPrimary.storyName = "Primary";
ButtonPrimary.args = {
  label: 'Primary Button',
  variant: 'primary'
};

export const ButtonPrimaryIcon = ButtonIconRender.bind({});
ButtonPrimaryIcon.storyName = "Primary with icon";
ButtonPrimaryIcon.args = {
  label: 'Primary With Icon',
  variant: 'primary'
};

export const ButtonSecondary = AccordionRenderPropsTemplate.bind({});
ButtonSecondary.storyName = "Secondary";
ButtonSecondary.args = {
  label: 'Secondary Button',
  variant: 'secondary'
};

export const ButtonSecondaryIcon = ButtonIconRender.bind({});
ButtonSecondaryIcon.storyName = "Secondary with icon";
ButtonSecondaryIcon.args = {
  label: 'Secondary With Icon',
  variant: 'secondary'
};


export const ButtonWarning = AccordionRenderPropsTemplate.bind({});
ButtonWarning.storyName = "Warning";
ButtonWarning.args = {
  label: 'Warning Button',
  variant: 'warning'
};

export const ButtonWarningIcon = ButtonWarningIconRender.bind({});
ButtonWarningIcon.storyName = "Warning with icon";
ButtonWarningIcon.args = {
  label: 'Warning With Icon',
  variant: 'warning'
};