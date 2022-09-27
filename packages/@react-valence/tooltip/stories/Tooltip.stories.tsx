import { Story } from "@ladle/react";
import { Tooltip } from "@react-valence/tooltip";
import BatteryHalf from "@valence-icons/ui/StopwatchFill";
import X from "@valence-icons/ui/ExclamationCircleFill";
import React from "react";

import { ValenceTooltipProps } from "@types-valence/tooltip";

export default {
  title: "Tooltip",
  component: Tooltip,
};

const TooltipRender: Story<ValenceTooltipProps> = (args) => {
  args = {
    isOpen: true,
    children: "10% Tip",
    ...args,
  };
  return <Tooltip {...args}>{args.children}</Tooltip>;
};

// type TooltipStory = ComponentStoryObj<typeof Tooltip>;

// export const Default: TooltipStory = {};

export const PlacementTop = TooltipRender.bind({});
PlacementTop.storyName = "Placement: Top";
PlacementTop.args = {};

export const PlacementLeft = TooltipRender.bind({});
PlacementLeft.storyName = "Placement: Left";
PlacementLeft.args = { placement: "left" };

export const PlacementRight = TooltipRender.bind({});
PlacementRight.storyName = "Placement: Right";
PlacementRight.args = { placement: "right" };

export const PlacementBottom = TooltipRender.bind({});
PlacementBottom.storyName = "Placement: Bottom";
PlacementBottom.args = { placement: "bottom" };

export const VariantInfo = TooltipRender.bind({});
VariantInfo.storyName = "Variant: Info";
VariantInfo.args = { variant: "info" };

export const VariantPositive = TooltipRender.bind({});
VariantPositive.storyName = "Variant: Positive";
VariantPositive.args = { variant: "positive" };

export const VariantNegative = TooltipRender.bind({});
VariantNegative.storyName = "Variant: Negative";
VariantNegative.args = { variant: "negative" };

export const VariantNeutral = TooltipRender.bind({});
VariantNeutral.storyName = "Variant: Neutral";
VariantNeutral.args = {};

export const ShowIcon = TooltipRender.bind({});
ShowIcon.storyName = "Variant: ShowIcon";
ShowIcon.args = { showIcon: true, variant: "info" };

export const LongContentShowIcon = TooltipRender.bind({});
LongContentShowIcon.storyName = "LongContentShowIcon";
LongContentShowIcon.args = {
  showIcon: true,
  variant: "negative",
  children: (
    <div>
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
      tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
      Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit
      amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
      sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget
      tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim
      ac dui.
    </div>
  ),
};
