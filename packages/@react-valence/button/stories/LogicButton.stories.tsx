import { action, Story } from "@ladle/react";
import { LogicButton } from "@react-valence/button";

import { ValenceLogicButtonProps } from "@types-valence/button";

import { Flex } from "@react-valence/layout";

export default {
  title: "LogicButton",
  component: LogicButton,
};

const ActionButtonRender: Story<ValenceLogicButtonProps> = (props) => (
  <Flex gap="size-100">
    <LogicButton
      onPress={action("press")}
      onPressStart={action("pressstart")}
      onPressEnd={action("pressend")}
      {...props}
    >
      Default
    </LogicButton>
    <LogicButton
      marginStart="10px"
      onPress={action("press")}
      onPressStart={action("pressstart")}
      onPressEnd={action("pressend")}
      isDisabled
      {...props}
    >
      Disabled
    </LogicButton>
  </Flex>
);

export const Default = ActionButtonRender.bind({});
Default.storyName = "And";
Default.args = {
  variant: "and",
  label: "and",
};

export const Or = ActionButtonRender.bind({});
Or.storyName = "Or";
Or.args = {
  variant: "or",
  label: "or",
};
