import { action, Story } from "@ladle/react";
//import { ErrorBoundary } from "@react-spectrum/story-utils";
import { RangeSlider } from "../";
import { ValenceRangeSliderProps } from "@types-valence/slider";

// let message = "Your browser may not support this set of format options.";
// .addDecorator((story) => (
//   <ErrorBoundary message={message}>{story()}</ErrorBoundary>
// ))


export default {
  title: "RangeSlider",
  component: RangeSlider,
};

const RangeSliderRender: Story<ValenceRangeSliderProps> = (props) => {
  return <RangeSlider {...props} />;
};

export const Default: Story<ValenceRangeSliderProps> = RangeSliderRender.bind({});
Default.args = { "aria-label": "Label" };

export const Label = RangeSliderRender.bind({});
Label.args = { label: "Label" };

export const Disabled = RangeSliderRender.bind({});
Disabled.args = { label: "Label", defaultValue: 50, isDisabled: true };

export const CustomWidth = RangeSliderRender.bind({});
CustomWidth.args = { label: "Label", width: "300px" };
CustomWidth.storyName = "CustomWidth:Large";

export const CustomWidthSmall = RangeSliderRender.bind({});
CustomWidthSmall.args = { label: "Label", width: "150px" };
CustomWidthSmall.storyName = "CustomWidth:Small";

export const LongLabel = RangeSliderRender.bind({});
LongLabel.args = {
  label: "This is a rather long label for this narrow slider element.",
  width: "300px",
};

export const ValueLabelFalse = RangeSliderRender.bind({});
ValueLabelFalse.args = { label: "Label", showValueLabel: false };

export const FormatOptionsPercent = RangeSliderRender.bind({});
FormatOptionsPercent.args = {
  label: "Label",
  minValue: 0,
  maxValue: 1,
  step: 0.01,
  formatOptions: { style: "percent" },
};
FormatOptionsPercent.storyName = "FormatOptions:Percent";

export const FormatOptionsCentimeter = RangeSliderRender.bind({});
FormatOptionsCentimeter.args = {
  label: "Label",
  maxValue: 1000,
  formatOptions: { style: "unit", unit: "centimeter" },
};
FormatOptionsCentimeter.storyName = "FormatOptions:Centimeter";


export const CustomValueLabel = RangeSliderRender.bind({});
CustomValueLabel.args = {
  label: "Label",
  getValueLabel: (state) => `A ${state} B`,
};
CustomValueLabel.storyName = "CustomValueLabel:Default";

export const CustomValueLabelOverflow = RangeSliderRender.bind({});
CustomValueLabelOverflow.args = {
  label: "This is a rather long label for this narrow slider element.",
  getValueLabel: (state) => `A ${state} B`,
};
CustomValueLabelOverflow.storyName = "CustomValueLabel:LabelOverflow";

export const LabelPositionSide = RangeSliderRender.bind({});
LabelPositionSide.args = { label: "Label", labelPosition: "side" };
LabelPositionSide.storyName = "LabelPosition:Side";

export const LabelPositionSideCustomWidth = RangeSliderRender.bind({});
LabelPositionSideCustomWidth.args = {
  label: "Label",
  labelPosition: "side",
  width: "400px",
};
LabelPositionSideCustomWidth.storyName = "LabelPosition:SideCustomWidth";

export const LabelPositionSideCustomWidthSmall = RangeSliderRender.bind({});
LabelPositionSideCustomWidthSmall.args = {
  label: "Label",
  labelPosition: "side",
  width: "150px",
};
LabelPositionSideCustomWidthSmall.storyName =
  "LabelPosition:SideCustomWidthSmall";

export const MinMax = RangeSliderRender.bind({});
MinMax.args = { label: "Label", minValue: 30, maxValue: 70 };
MinMax.storyName = "MinMax";