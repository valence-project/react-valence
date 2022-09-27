import { useState } from "react";

import { action, Story } from "@ladle/react";
import { ToggleButton } from "@react-valence/button";

import { ValenceToggleButtonProps } from "@types-valence/button";

import { Flex } from "@react-valence/layout";
import { Text } from "@react-valence/text";
import { View } from "@react-valence/view";

import Robot from "@valence-icons/ui/RobotFill";

export default {
  title: "ToggleButton",
  component: ToggleButton,
};

const ToggleButtonRender: Story<ValenceToggleButtonProps> = (props) => (
  <Flex gap="size-100">
    <ToggleButton
      onChange={action("change")}
      onPress={action("press")}
      {...props}
    >
      <Robot />
      <Text>Default</Text>
    </ToggleButton>
    <ToggleButton
      onChange={action("change")}
      onPress={action("press")}
      defaultSelected
      {...props}
    >
      <Robot />
      <Text>Selected</Text>
    </ToggleButton>
    <ToggleButton defaultSelected isDisabled {...props}>
      <Robot />
      <Text>Disabled and selected</Text>
    </ToggleButton>
  </Flex>
);

export const Default = ToggleButtonRender.bind({});
Default.storyName = "Default";
Default.args = {};

export const Emphasized = ToggleButtonRender.bind({});
Emphasized.storyName = "Emphasized";
Emphasized.args = {
  isEmphasized: true,
};

export const Quiet = ToggleButtonRender.bind({});
Quiet.storyName = "Quiet";
Quiet.args = {
  isQuiet: true,
};

export const QuietEmphasized = ToggleButtonRender.bind({});
QuietEmphasized.storyName = "Quiet and Emphasized";
QuietEmphasized.args = {
  isQuiet: true,
  isEmphasized: true,
};

const ControlledToggleButtonRender: Story<ValenceToggleButtonProps> = (
  props
) => {
  let [selected, setSelected] = useState(false);
  return (
    <div>
      <ToggleButton isSelected={selected} onChange={setSelected}>
        Press Me
      </ToggleButton>
      <br />
      {selected ? "true" : "false"}
    </div>
  );
};

export const Controlled = ControlledToggleButtonRender.bind({});
Controlled.storyName = "Controlled";
Controlled.args = {};

const StaticColorToggleButtonRender: Story<ValenceToggleButtonProps> = (
  props
) => {
  let background =
    props.staticColor === "black" ? "static-seafoam-200" : "static-seafoam-600";
  return (
    <div>
      {/* @ts-ignore */}
      <View backgroundColor={background} padding="size-1000">
        <Flex direction="column" rowGap="size-150">
          {Default(props)}
          {Default({ ...props, isQuiet: true })}
        </Flex>
      </View>
    </div>
  );
};

export const StaticColorWhite = StaticColorToggleButtonRender.bind({});
StaticColorWhite.storyName = "Static Color White";
StaticColorWhite.args = {
  staticColor: "white",
};

export const StaticColorBlack = StaticColorToggleButtonRender.bind({});
StaticColorBlack.storyName = "Static Color Black";
StaticColorBlack.args = {
  staticColor: "black",
};
