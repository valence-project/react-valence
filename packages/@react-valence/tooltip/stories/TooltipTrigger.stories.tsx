import { action, Story } from "@ladle/react";
import { ActionButton, Button } from "@react-valence/button";
import { ActionGroup, Item } from "@react-valence/actiongroup";

import { Flex } from "@react-valence/layout";
import { Link } from "@react-valence/link";
import { useState } from "react";
import Robot from "@valence-icons/ui/RobotFill";
import Aliens from "@valence-icons/ui/AliensFill";
import Happy from "@valence-icons/ui/EmotionHappyFill";
import { ValenceTooltipTriggerProps } from "@types-valence/tooltip";
import { Tooltip, TooltipTrigger } from "@react-valence/tooltip";

interface TooltipTooltipTriggerProps {
  variant?: "neutral" | "positive" | "negative" | "info";
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}

interface MultipleTriggersProps extends ValenceTooltipTriggerProps {
  isControlled?: boolean;
}

const argTypes = {
  placement: {
    control: "select",
    defaultValue: "bottom",
    options: [
      "bottom",
      "bottom left",
      "bottom right",
      "bottom start",
      "bottom end",
      "top",
      "top left",
      "top right",
      "top start",
      "top end",
      "left",
      "left top",
      "left bottom",
      "start",
      "start top",
      "start bottom",
      "right",
      "right top",
      "right bottom",
      "end",
      "end top",
      "end bottom",
    ],
  },
  delay: {
    control: "number",
    defaultValue: 1500,
    min: 0,
    max: 50000,
    step: 500,
  },
  offset: {
    control: "number",
    defaultValue: 0,
    min: -500,
    max: 500,
  },
  crossOffset: {
    control: "number",
    defaultValue: 0,
    min: -500,
    max: 500,
  },
  containerPadding: {
    control: "number",
    defaultValue: 0,
    min: -500,
    max: 500,
  },
  isDisabled: {
    control: "boolean",
    defaultValue: false,
  },
  shouldFlip: {
    control: "boolean",
    defaultValue: true,
  },
  trigger: {
    control: "radio",
    defaultValue: undefined,
    options: [undefined, "focus"],
  },
  children: {
    control: { disable: true },
  },
};

const disabledArgTypes = {
  placement: {
    control: { disable: true },
  },
  delay: {
    control: { disable: true },
  },
  offset: {
    control: { disable: true },
  },
  crossOffset: {
    control: { disable: true },
  },
  containerPadding: {
    control: { disable: true },
  },
  isDisabled: {
    control: { disable: true },
  },
  shouldFlip: {
    control: { disable: true },
  },
  trigger: {
    control: { disable: true },
  },
  children: {
    control: { disable: true },
  },
};

export default {
  title: "TooltipTrigger",
  component: TooltipTrigger,
};

const TooltipTriggerRender: Story<ValenceTooltipTriggerProps> = (args) => {
  args = {
    children: [
      <ActionButton aria-label="Tooltip Trigger">
        <Robot />
      </ActionButton>,
      <Tooltip>Change Name</Tooltip>,
    ],
    ...args,
  };
  return <TooltipTrigger {...args}>{args.children}</TooltipTrigger>;
};

export const Default = TooltipTriggerRender.bind({});

export const DefaultOpen = TooltipTriggerRender.bind({});
DefaultOpen.args = { defaultOpen: true };
DefaultOpen.storyName = "DefaultOpen";

export const IsOpen = TooltipTriggerRender.bind({});
IsOpen.args = { isOpen: true };
IsOpen.storyName = "IsOpen";

export const Disabled = TooltipTriggerRender.bind({});
Disabled.args = {
  children: [
    <ActionButton aria-label="Edit Name" isDisabled>
      <Robot />
    </ActionButton>,
    <Tooltip>Change Name</Tooltip>,
  ],
};

export const TooltipLink = TooltipTriggerRender.bind({});
TooltipLink.args = {
  children: [
    <Link>
      <a
        href="https://en.wikipedia.org/wiki/Feathered_dinosaur"
        target="_blank"
        rel="noreferrer"
      >
        Why did dinosaurs have feathers?
      </a>
    </Link>,
    <Tooltip>Dinosaurs had feathers, find out more.</Tooltip>,
  ],
};

export const TooltipActionGroup: Story<ValenceTooltipTriggerProps> = (args) => {
  return (
    <ActionGroup
      selectionMode="single"
      disallowEmptySelection
      onSelectionChange={action("onSelectionChange")}
    >
      <TooltipTrigger {...args}>
        <Item key="editKey" aria-label="Edit">
          <Robot />
        </Item>
        <Tooltip>Edit</Tooltip>
      </TooltipTrigger>
      <TooltipTrigger {...args}>
        <Item key="saveKey" aria-label="Save">
          <Happy />
        </Item>
        <Tooltip>Save</Tooltip>
      </TooltipTrigger>
      <TooltipTrigger {...args}>
        <Item key="deleteKey" aria-label="Delete">
          <Aliens />
        </Item>
        <Tooltip>Delete</Tooltip>
      </TooltipTrigger>
    </ActionGroup>
  );
};
TooltipActionGroup.args = { delay: 0 };

export const ArrowPositioningAtEdge = TooltipTriggerRender.bind({});
ArrowPositioningAtEdge.args = {
  children: [
    <ActionButton>Trigger Tooltip</ActionButton>,
    <Tooltip>Long tooltip message that just goes on and on.</Tooltip>,
  ],
};
ArrowPositioningAtEdge.decorators = [
  (Story) => (
    <div style={{ width: "100%" }}>
      <Story />
    </div>
  ),
];

export const TooltipWithOtherHoverables = TooltipTriggerRender.bind({});
TooltipWithOtherHoverables.args = {
  children: [
    <ActionButton>Trigger Tooltip</ActionButton>,
    <Tooltip>Long tooltip message that just goes on and on.</Tooltip>,
  ],
};
TooltipWithOtherHoverables.decorators = [
  (Story) => (
    <Flex gap="size-100">
      <Story />
      <Button variant="secondary">No Tooltip</Button>
    </Flex>
  ),
];

const MultipleTriggersRender: Story<MultipleTriggersProps> = (props) => {
  let [one, setOne] = useState(false);
  let [two, setTwo] = useState(false);
  let [three, setThree] = useState(false);
  let [four, setFour] = useState(false);

  let items: Array<TooltipTooltipTriggerProps> = [
    { variant: "neutral", isOpen: one, onOpenChange: setOne },
    { variant: "positive", isOpen: two, onOpenChange: setTwo },
    { variant: "negative", isOpen: three, onOpenChange: setThree },
    { variant: "info", isOpen: four, onOpenChange: setFour },
  ];

  return (
    <Flex gap="size-100" direction="column">
      {items.map((item) => (
        <TooltipTrigger
          {...props}
          key={item.variant}
          isOpen={props.isControlled ? item.isOpen : undefined}
          onOpenChange={null}
        >
          <ActionButton>{item.variant} Tooltip</ActionButton>
          <Tooltip variant={item.variant} showIcon>
            {item.variant} message.
          </Tooltip>
        </TooltipTrigger>
      ))}
    </Flex>
  );
};

export const MultipleTooltips = MultipleTriggersRender.bind({});
MultipleTooltips.storyName  = "MultipleTriggers: Default"

export const ControlledMultipleTooltips = MultipleTriggersRender.bind({});
ControlledMultipleTooltips.args = { placement: "start", isControlled: true };
ControlledMultipleTooltips.storyName = "MultipleTriggers: Controlled";

const CrossoffsetExamplesRender: Story<MultipleTriggersProps> = (
  props
) => {
  return (
    <Flex gap="size-200">
      <Flex gap="size-200" direction="column" alignItems="start">
        <span>Left Top</span>
        <TooltipTrigger delay={0} placement="left top" crossOffset={10}>
          <ActionButton>Tooltip Trigger 10</ActionButton>
          <Tooltip>Tooltip message.</Tooltip>
        </TooltipTrigger>
        <TooltipTrigger delay={0} placement="left top">
          <ActionButton>Tooltip Trigger 0</ActionButton>
          <Tooltip>Tooltip message.</Tooltip>
        </TooltipTrigger>
        <TooltipTrigger delay={0} placement="left top" crossOffset={-10}>
          <ActionButton>Tooltip Trigger -10</ActionButton>
          <Tooltip>Tooltip message.</Tooltip>
        </TooltipTrigger>
        <TooltipTrigger delay={0} placement="left top" crossOffset={10}>
          <ActionButton>Tooltip 10</ActionButton>
          <Tooltip>Tooltip message.</Tooltip>
        </TooltipTrigger>
        <TooltipTrigger delay={0} placement="left top">
          <ActionButton>Tooltip 0</ActionButton>
          <Tooltip>Tooltip message.</Tooltip>
        </TooltipTrigger>
        <TooltipTrigger delay={0} placement="left top" crossOffset={-10}>
          <ActionButton>Tooltip -10</ActionButton>
          <Tooltip>Tooltip message.</Tooltip>
        </TooltipTrigger>
      </Flex>
      <Flex gap="size-200" direction="column" alignItems="start">
        <span>Left</span>
        <TooltipTrigger delay={0} placement="left" crossOffset={10}>
          <ActionButton>Tooltip Trigger 10</ActionButton>
          <Tooltip>Tooltip message.</Tooltip>
        </TooltipTrigger>
        <TooltipTrigger delay={0} placement="left">
          <ActionButton>Tooltip Trigger 0 </ActionButton>
          <Tooltip>Tooltip message.</Tooltip>
        </TooltipTrigger>
        <TooltipTrigger delay={0} placement="left" crossOffset={-10}>
          <ActionButton>Tooltip Trigger -10</ActionButton>
          <Tooltip>Tooltip message.</Tooltip>
        </TooltipTrigger>
        <TooltipTrigger delay={0} placement="left" crossOffset={10}>
          <ActionButton>Tooltip 10</ActionButton>
          <Tooltip>Tooltip message.</Tooltip>
        </TooltipTrigger>
        <TooltipTrigger delay={0} placement="left">
          <ActionButton>Tooltip 0</ActionButton>
          <Tooltip>Tooltip message.</Tooltip>
        </TooltipTrigger>
        <TooltipTrigger delay={0} placement="left" crossOffset={-10}>
          <ActionButton>Tooltip -10</ActionButton>
          <Tooltip>Tooltip message.</Tooltip>
        </TooltipTrigger>
      </Flex>
      <Flex gap="size-200" direction="column" alignItems="start">
        <span>Left Bottom</span>
        <TooltipTrigger delay={0} placement="left bottom" crossOffset={10}>
          <ActionButton>Tooltip Trigger 10</ActionButton>
          <Tooltip>Tooltip message.</Tooltip>
        </TooltipTrigger>
        <TooltipTrigger delay={0} placement="left bottom">
          <ActionButton>Tooltip Trigger 0</ActionButton>
          <Tooltip>Tooltip message.</Tooltip>
        </TooltipTrigger>
        <TooltipTrigger delay={0} placement="left bottom" crossOffset={-10}>
          <ActionButton>Tooltip Trigger -10</ActionButton>
          <Tooltip>Tooltip message.</Tooltip>
        </TooltipTrigger>
        <TooltipTrigger delay={0} placement="left bottom" crossOffset={10}>
          <ActionButton>Tooltip 10</ActionButton>
          <Tooltip>Tooltip message.</Tooltip>
        </TooltipTrigger>
        <TooltipTrigger delay={0} placement="left bottom">
          <ActionButton>Tooltip 0</ActionButton>
          <Tooltip>Tooltip message.</Tooltip>
        </TooltipTrigger>
        <TooltipTrigger delay={0} placement="left bottom" crossOffset={-10}>
          <ActionButton>Tooltip -10</ActionButton>
          <Tooltip>Tooltip message.</Tooltip>
        </TooltipTrigger>
      </Flex>
    </Flex>
  );
};
export const CrossoffsetExamples = CrossoffsetExamplesRender.bind({});
CrossoffsetExamples.args = {};
