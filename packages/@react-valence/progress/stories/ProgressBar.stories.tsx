import { ProgressBar } from "@react-valence/progress";
import React, { CSSProperties } from "react";
import { Story } from "@ladle/react";

import { ValenceProgressBarProps } from "@react-valence/progress";

const formatOptions = {
  style: "currency",
  currency: "JPY",
};

const grayedBoxStyle: CSSProperties = {
  width: "250px",
  height: "60px",
  backgroundColor: "rgba(0,0,0,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const ProgressRender: Story<ValenceProgressBarProps> = (props: any = {}) => {
  props = {
    value: 42,
    ...props,
  };
  return <ProgressBar label="Loading…" {...props} />;
};

export const ProgressDefault: Story<ValenceProgressBarProps> =
  ProgressRender.bind({});

export const Value50: Story<ValenceProgressBarProps> = ProgressRender.bind({});
Value50.args = { value: 50 };
Value50.storyName = "Value:FiftyPercent"

export const Value100: Story<ValenceProgressBarProps> = ProgressRender.bind({});
Value100.args = { value: 100 };
Value100.storyName = "Value:Full"

export const SizeSmall: Story<ValenceProgressBarProps> = ProgressRender.bind({});
SizeSmall.args = { size: 's' };
SizeSmall.storyName = "Size:Small"

export const ShowValueLabel: Story<ValenceProgressBarProps> = ProgressRender.bind({});
ShowValueLabel.args = { showValueLabel: true };
ShowValueLabel.storyName = "ValueLabel:ShowValueLabelTrue"

export const ShowValueLabelFalse: Story<ValenceProgressBarProps> = ProgressRender.bind({});
ShowValueLabelFalse.args = { showValueLabel: false };
ShowValueLabelFalse.storyName = "ValueLabel:ShowValueLabelFalse"

export const ValueLabelOneOfFour: Story<ValenceProgressBarProps> = ProgressRender.bind({});
ValueLabelOneOfFour.args = { value: 25, valueLabel: '1 of 4' };
ValueLabelOneOfFour.storyName = "ValueLabel:Custom"

export const LabelNoneVisible: Story<ValenceProgressBarProps> = ProgressRender.bind({});
LabelNoneVisible.args = { value: 25, label: null, "aria-label": "Loading…" };
LabelNoneVisible.storyName = "Label:NoneVisible"

export const LabelPositionSide: Story<ValenceProgressBarProps> = ProgressRender.bind({});
LabelPositionSide.args = { labelPosition: 'side' };
LabelPositionSide.storyName = "Label:LabelPositionSide"

export const LabelPositionTop: Story<ValenceProgressBarProps> = ProgressRender.bind({});
LabelPositionTop.args = { labelPosition: 'top' };
LabelPositionTop.storyName = "Label:LabelPositionTop"

export const LabelLong: Story<ValenceProgressBarProps> = ProgressRender.bind({});
LabelLong.args = { label: "Super long progress bar label. Sample label copy. Loading..." };
LabelLong.storyName = "Label:Long"

export const LabelLongPositionSide: Story<ValenceProgressBarProps> = ProgressRender.bind({});
LabelLongPositionSide.args = { labelPosition: 'side', label: "Super long progress bar label. Sample label copy. Loading..." };
LabelLongPositionSide.storyName = "Label:LongPositionSide"

// storiesOf("Progress/ProgressBar", module)
//   .addParameters({
//     providerSwitcher: { status: "positive" },
//     args: { value: 32 },
//     argTypes: {
//       value: {
//         control: {
//           type: "range",
//           min: 0,
//           max: 100,
//         },
//       },
//     },
//   })
//   .add("Using number formatOptions with currency style", (args) =>
//     render({
//       ...args,
//       showValueLabel: true,
//       formatOptions,
//     })
//   )
//   .add("isIndeterminate: true", (args) =>
//     render({ isIndeterminate: true, ...args })
//   )
//   .add("isIndeterminate: true, size: S", () =>
//     render({ isIndeterminate: true, size: "S" })
//   )
//   .add("variant: overBackground", (args) => (
//     <div style={grayedBoxStyle}>
//       {render({ variant: "overBackground", ...args })}
//     </div>
//   ))
//   .add("parent width 100%", () => (
//     <span style={{ width: "100%" }}>{render()}</span>
//   ))
//   .add("parent width 100px", () => (
//     <span style={{ width: "100px" }}>{render()}</span>
//   ))
//   .add("width: 300px", () => render({ width: "300px", value: 100 }))
//   .add("width: 300px, isIndeterminate: true", () =>
//     render({ width: "300px", isIndeterminate: true })
//   )
//   .add("width: 300px, labelPosition: side", () =>
//     render({ width: "300px", labelPosition: "side" })
//   )
//   .add("width: 300px, labelPosition: side, isIndeterminate: true", () =>
//     render({ width: "300px", labelPosition: "side", isIndeterminate: true })
//   )
//   .add("width: 30px", () => render({ width: "30px" }))
//   .add("width: 30px, size: S", () => render({ width: "30px", size: "S" }))
//   .add("width: 30px, labelPosition: side, long label", () =>
//     render({
//       width: "30px",
//       labelPosition: "side",
//       label: "Super long progress bar label. Sample label copy. Loading...",
//     })
//   )
//   .add(
//     "width: 30px, labelPosition: side, isIndeterminate: true, long label, button on right",
//     () => (
//       <>
//         {render({
//           width: "30px",
//           labelPosition: "side",
//           isIndeterminate: true,
//           label: "Super long progress bar label. Sample label copy. Loading...",
//         })}
//         <button>Confirm</button>
//       </>
//     )
//   )
//   .add("Using raw values for minValue, maxValue, and value", () =>
//     render({
//       showValueLabel: true,
//       labelPosition: "top",
//       maxValue: 2147483648,
//       value: 715827883,
//     })
//   )
//   .add("Using raw values with number formatter", () =>
//     render({
//       showValueLabel: true,
//       labelPosition: "top",
//       maxValue: 2147483648,
//       value: 715827883,
//       formatOptions,
//     })
//   );
