import { Story, action } from "@ladle/react";
import { ActionButton } from "@react-valence/button";
import { Text } from "@react-valence/text";
import BatteryHalf from "@valence-icons/ui/GamepadFill";
import React from "react";

import Add from "@valence-icons/ui/AncientGateFill";

import {
  ValenceButtonProps,
  ValenceActionButtonProps,
} from "@types-valence/button";

import { Flex } from "@react-valence/layout";
import { View } from "@react-valence/view";
import { Divider } from "@react-valence/divider";

type ItemType = {
  key: React.Key;
  title: string;
};

/**
 * Helper type so `bind` returns the actual Story type.
 */

export default {
  title: "ActionButton",
  component: ActionButton,
};

const ActionButtonRender: Story<ValenceActionButtonProps> = (props) => (
  <Flex gap="size-100">
    <ActionButton
      onPress={action("press")}
      onPressStart={action("pressstart")}
      onPressEnd={action("pressend")}
      {...props}
    >
      Default
    </ActionButton>
    <ActionButton
      onPress={action("press")}
      onPressStart={action("pressstart")}
      onPressEnd={action("pressend")}
      isDisabled
      {...props}
    >
      Disabled
    </ActionButton>
  </Flex>
);

export const Default = ActionButtonRender.bind({});
Default.storyName = "Text";
Default.args = {
  children: "Text",
};

export const renderWithIcon: Story<ValenceActionButtonProps> = (props) => {
  return (
    <Flex gap="size-100">
      <ActionButton
        onPress={action("press")}
        onPressStart={action("pressstart")}
        onPressEnd={action("pressend")}
        {...props}
      >
        <Add />
        <Text>Default</Text>
      </ActionButton>
      <ActionButton
        onPress={action("press")}
        onPressStart={action("pressstart")}
        onPressEnd={action("pressend")}
        isDisabled
        {...props}
      >
        <Text>Disabled</Text>
        <Add />
      </ActionButton>
    </Flex>
  );
};

export const StaticColor: Story<ValenceActionButtonProps> = (props) => {
  
  let colors = ['yellow', 'celery', 'seafoam', 'indigo'];
  
  const buttons = colors.map((color, n) => {
    let brightness = props.staticColor === 'black' ? 200 : 700; 
    const valenceHue = `static-${color}-${brightness}` as const;
    return (
      <View backgroundColor={valenceHue} padding={"size-100"}>
        <Flex gap="size-100">

          <ActionButton
            onPress={action("press")}
            onPressStart={action("pressstart")}
            onPressEnd={action("pressend")}
            {...props}
          >
            <Add/>
            <Text>
              Text + Icon
            </Text>
          </ActionButton>

          <ActionButton
            onPress={action("press")}
            onPressStart={action("pressstart")}
            onPressEnd={action("pressend")}
            {...props}
          >
            <Add/>
          </ActionButton>
          <ActionButton
            onPress={action("press")}
            onPressStart={action("pressstart")}
            onPressEnd={action("pressend")}
            {...props}
          >
            Default
          </ActionButton>
          <ActionButton
            onPress={action("press")}
            onPressStart={action("pressstart")}
            onPressEnd={action("pressend")}
            isDisabled
            {...props}
          >
            Default Disabled
          </ActionButton>
        </Flex>
      </View>
    )
  });

  return <>{buttons}</>;
};
StaticColor.args = {
  staticColor: "black",
};
StaticColor.storyName = "Static Color: Black";

export const StaticColorBlackQuiet = StaticColor.bind({});
StaticColorBlackQuiet.args = {
  staticColor: "black",
  isQuiet: true,
};
StaticColorBlackQuiet.storyName = "Static Color: Black Quiet";

export const StaticColorWhite = StaticColor.bind({});
StaticColorWhite.args = {
  staticColor: "white",
};
StaticColorWhite.storyName = "Static Color: White";

export const StaticColorWhiteQuiet = StaticColor.bind({});
StaticColorWhiteQuiet.args = {
  staticColor: "white",
  isQuiet: true,
};
StaticColorWhiteQuiet.storyName = "Static Color: White Quiet";
