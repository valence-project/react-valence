import { action, Story } from "@ladle/react";
//import { ErrorBoundary } from "@react-valence/story-utils";
import { Flex } from "@react-valence/layout";
import React from "react";
import { Slider } from "../";
import { ValenceSliderProps } from "@types-valence/slider";

// let message = "Your browser may not support this set of format options.";
// .addDecorator((story) => (
//   <ErrorBoundary message={message}>{story()}</ErrorBoundary>
// ))

export default {
  title: "Slider",
  component: Slider,
};

const SliderRender: Story<ValenceSliderProps> = (props) => {
  return <Slider {...props} />;
};

export const Default = SliderRender.bind({});
Default.args = { "aria-label": "Label" };

export const Label = SliderRender.bind({});
Label.args = { label: "Label" };

export const Disabled = SliderRender.bind({});
Disabled.args = { label: "Label", defaultValue: 50, isDisabled: true };

export const CustomWidth = SliderRender.bind({});
CustomWidth.args = { label: "Label", width: "300px" };
CustomWidth.storyName = "CustomWidth:Large";

export const CustomWidthSmall = SliderRender.bind({});
CustomWidthSmall.args = { label: "Label", width: "150px" };
CustomWidthSmall.storyName = "CustomWidth:Small";

export const LongLabel = SliderRender.bind({});
LongLabel.args = {
  label: "This is a rather long label for this narrow slider element.",
  width: "300px",
};

export const ValueLabelFalse = SliderRender.bind({});
ValueLabelFalse.args = { label: "Label", showValueLabel: false };

export const FormatOptionsPercent = SliderRender.bind({});
FormatOptionsPercent.args = {
  label: "Label",
  minValue: 0,
  maxValue: 1,
  step: 0.01,
  formatOptions: { style: "percent" },
};
FormatOptionsPercent.storyName = "FormatOptions:Percent";

export const FormatOptionsCentimeter = SliderRender.bind({});
FormatOptionsCentimeter.args = {
  label: "Label",
  maxValue: 1000,
  formatOptions: { style: "unit", unit: "centimeter" },
};
FormatOptionsCentimeter.storyName = "FormatOptions:Centimeter";

export const CustomValueLabel = SliderRender.bind({});
CustomValueLabel.args = {
  label: "Label",
  getValueLabel: (state) => `A ${state} B`,
};
CustomValueLabel.storyName = "CustomValueLabel:Default";

export const CustomValueLabelOverflow = SliderRender.bind({});
CustomValueLabelOverflow.args = {
  label: "This is a rather long label for this narrow slider element.",
  getValueLabel: (state) => `A ${state} B`,
};
CustomValueLabelOverflow.storyName = "CustomValueLabel:LabelOverflow";

export const LabelPositionSide = SliderRender.bind({});
LabelPositionSide.args = { label: "Label", labelPosition: "side" };
LabelPositionSide.storyName = "LabelPosition:Side";

export const LabelPositionSideCustomWidth = SliderRender.bind({});
LabelPositionSideCustomWidth.args = {
  label: "Label",
  labelPosition: "side",
  width: "400px",
};
LabelPositionSideCustomWidth.storyName = "LabelPosition:SideCustomWidth";

export const LabelPositionSideCustomWidthSmall = SliderRender.bind({});
LabelPositionSideCustomWidthSmall.args = {
  label: "Label",
  labelPosition: "side",
  width: "150px",
};
LabelPositionSideCustomWidthSmall.storyName =
  "LabelPosition:SideCustomWidthSmall";

export const MinMax = SliderRender.bind({});
MinMax.args = { label: "Label", minValue: 30, maxValue: 70 };
MinMax.storyName = "MinMax";

export const Step = SliderRender.bind({});
Step.args = { label: "Label", minValue: 0, maxValue: 100, step: 5 };
Step.storyName = "Step";

export const Filled = SliderRender.bind({});
Filled.args = { label: "Label", isFilled: true };
Filled.storyName = "Filled";

export const FillOffset = SliderRender.bind({});
FillOffset.args = {
  label: "Exposure",
  isFilled: true,
  fillOffset: 0,
  defaultValue: 0,
  minValue: -7,
  maxValue: 5,
};
FillOffset.storyName = "FillOffset";

export const TrackGradient = SliderRender.bind({});
TrackGradient.args = { label: "Label", trackGradient: ["blue", "red"] };
TrackGradient.storyName = "TrackGradient:Example";

export const TrackGradientFillOffset = SliderRender.bind({});
TrackGradientFillOffset.args = {
  label: "Label",
  trackGradient: ["blue", "red"],
  isFilled: true,
  fillOffset: 50,
};
TrackGradientFillOffset.storyName = "TrackGradient:FillOffset";

export const Vertical = SliderRender.bind({});
Vertical.args = { label: 'Label', orientation: 'vertical' };
Vertical.storyName = "Vertical";

const MultiTouchRender: Story<ValenceSliderProps> = (props) => {
  return (
    <Flex direction="column" gap="size-1000">
      <Default {...{ label: "Label" }} />
      <Default {...{ label: "Label" }} />
    </Flex>
  );
};
export const MultiTouch = MultiTouchRender.bind({});
MultiTouch.args = { label: "Label" };
