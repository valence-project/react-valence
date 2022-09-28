import { chain } from "@react-aria/utils";
import { Story } from "@ladle/react";
import { Flex } from "@react-valence/layout";
import React, { useState } from "react";
import { Switch } from "../";

import { ValenceSwitchProps } from "@types-valence/switch";

export default {
  title: "Switch",
  component: Switch,
  argTypes: {
    onChange: {
      action: "change",
    },
    onFocus: {
      action: "focus",
    },
    onBlur: {
      action: "blur",
    },
  },
};

const SwitchRender: Story<ValenceSwitchProps> = (props) => {
  return <Switch {...props} />;
};

export const Default = SwitchRender.bind({});
Default.args = { children: <>Switch Label</> };

export const DefaultSelectedTrue = SwitchRender.bind({});
DefaultSelectedTrue.args = { ...Default.args, defaultSelected: true };
DefaultSelectedTrue.storyName = "defaultSelected: true";

export const IsSelectedTrue = SwitchRender.bind({});
IsSelectedTrue.args = { ...Default.args, isSelected: true };
IsSelectedTrue.storyName = "isSelected: true";

export const IsSelectedFalse = SwitchRender.bind({});
IsSelectedFalse.args = { ...Default.args, isSelected: false };
IsSelectedFalse.storyName = "isSelected: false";

export const IsDisabledTrue = SwitchRender.bind({});
(IsDisabledTrue.args = { ...Default.args, isDisabled: true }),
  (IsDisabledTrue.storyName = "isDisabled: true");

export const IsReadOnlyTrueIsSelectedTrue = SwitchRender.bind({});
IsReadOnlyTrueIsSelectedTrue.args = {
  ...Default.args,
  isReadOnly: true,
  isSelected: true,
};
IsReadOnlyTrueIsSelectedTrue.storyName = "isReadOnly: true, isSelected: true";

export const AutoFocus = SwitchRender.bind({});
AutoFocus.args = { ...Default.args, autoFocus: true };
AutoFocus.storyName = "autoFocus";

export const CustomLabel = SwitchRender.bind({});
CustomLabel.args = {
  ...Default.args,
  children: (
    <span>
      <i>Italicized</i> Switch Label
    </span>
  ),
};
CustomLabel.storyName = "custom label";

export const LongLabel = SwitchRender.bind({});
LongLabel.args = {
  ...Default.args,
  children: (
    <>
      Super long checkbox label. Sample text. Arma virumque cano, Troiae qui
      primus ab oris. Italiam, fato profugus, Laviniaque venit.
    </>
  ),
};
LongLabel.storyName = "long label";

export const NoLabel = SwitchRender.bind({});
(NoLabel.args = {
  "aria-label": "This switch has no visible label",
}),
  (NoLabel.storyName = "no label");

const ControlledSwitchRender: Story<ValenceSwitchProps> = (props) => {
  let [checked, setChecked] = useState(false);
  return (
    <Switch
      {...props}
      onChange={chain(setChecked, props.onChange)}
      isSelected={checked}
    />
  );
};

export const ControlledImplementation = ControlledSwitchRender.bind({});
