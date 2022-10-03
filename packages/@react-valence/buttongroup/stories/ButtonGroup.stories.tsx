import { action, Story } from "@ladle/react";
import Robot from "@valence-icons/ui/AliensFill";
import { Button } from "@react-valence/button";
import { ButtonGroup } from "@react-valence/buttongroup";
import { Text } from "@react-valence/text";
import { useState } from "react";
import { ValenceButtonGroupProps } from "@types-valence/buttongroup";

export default {
  title: "ButtonGroup",
  component: ButtonGroup,
};

const ButtonGroupRender: Story<ValenceButtonGroupProps> = (props) => {
  let [show, setShow] = useState(false);
  return (
    <ButtonGroup maxWidth="100vw" {...props}>
      <Button variant="primary" onPress={action("press")}>
        Button 1
      </Button>
      <Button variant="negative" onPress={action("press")}>
        Button long long long name
      </Button>
      <Button variant="primary" isQuiet onPress={action("press")}>
        Quiet button
      </Button>
      <Button variant="primary" isDisabled onPress={action("press")}>
        Disabled button
      </Button>
      <Button variant="secondary" onPress={() => setShow((show) => !show)}>
        <Robot />
        <Text>Click me to make Button larger</Text>
        {show && <Text>to test overflow resizing :D</Text>}
      </Button>
    </ButtonGroup>
  );
};

export const Default = ButtonGroupRender.bind({});
Default.storyName = "Default";
Default.args = {};

export const Disabled = ButtonGroupRender.bind({});
Disabled.storyName = "Disabled";
Disabled.args = {
  isDisabled: true,
};

export const OrientationVertical = ButtonGroupRender.bind({});
OrientationVertical.storyName = "Orientation: Vertical";
OrientationVertical.args = {
  orientation: "vertical",
};

export const OrientationVerticalAlignEnd = ButtonGroupRender.bind({});
OrientationVerticalAlignEnd.storyName = "Orientation: Vertical align end";
OrientationVerticalAlignEnd.args = {
  orientation: "vertical",
  align: "end",
};

export const OrientationVerticalDisabled = ButtonGroupRender.bind({});
OrientationVerticalDisabled.storyName = "Orientation: Vertical Disabled";
OrientationVerticalDisabled.args = {
  orientation: "vertical",
  isDisabled: true,
};

const ExpandingSiblingRender: Story<ValenceButtonGroupProps> = (props) => {
  let [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "nowrap",
        width: "1000px",
        overflow: "hidden",
        padding: "10px",
        backgroundColor: "var(--valence-global-color-gray-50)",
      }}
    >
      <div style={{ paddingRight: isExpanded ? "200px" : "10px" }}>
        <Button
          variant="secondary"
          onPress={() => setIsExpanded((prev) => !prev)}
        >
          {isExpanded ? "Shrink" : "Expand"}
        </Button>
      </div>
      {Default(props)}
    </div>
  );
};

export const ExpandingSibling = ExpandingSiblingRender.bind({});
ExpandingSibling.storyName = "Expanding Sibling";
ExpandingSibling.args = {};
