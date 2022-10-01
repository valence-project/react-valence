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
Value50.storyName = "Value:FiftyPercent";

export const Value100: Story<ValenceProgressBarProps> = ProgressRender.bind({});
Value100.args = { value: 100 };
Value100.storyName = "Value:Full";

export const SizeSmall: Story<ValenceProgressBarProps> = ProgressRender.bind(
  {}
);
SizeSmall.args = { size: "s" };
SizeSmall.storyName = "Size:Small";

export const ShowValueLabel: Story<ValenceProgressBarProps> =
  ProgressRender.bind({});
ShowValueLabel.args = { showValueLabel: true };
ShowValueLabel.storyName = "ValueLabel:ShowValueLabelTrue";

export const ShowValueLabelFalse: Story<ValenceProgressBarProps> =
  ProgressRender.bind({});
ShowValueLabelFalse.args = { showValueLabel: false };
ShowValueLabelFalse.storyName = "ValueLabel:ShowValueLabelFalse";

export const ValueLabelOneOfFour: Story<ValenceProgressBarProps> =
  ProgressRender.bind({});
ValueLabelOneOfFour.args = { value: 25, valueLabel: "1 of 4" };
ValueLabelOneOfFour.storyName = "ValueLabel:Custom";

export const LabelNoneVisible: Story<ValenceProgressBarProps> =
  ProgressRender.bind({});
LabelNoneVisible.args = { value: 25, label: null, "aria-label": "Loading…" };
LabelNoneVisible.storyName = "Label:NoneVisible";

export const LabelPositionSide: Story<ValenceProgressBarProps> =
  ProgressRender.bind({});
LabelPositionSide.args = { labelPosition: "side" };
LabelPositionSide.storyName = "Label:LabelPositionSide";

export const LabelPositionTop: Story<ValenceProgressBarProps> =
  ProgressRender.bind({});
LabelPositionTop.args = { labelPosition: "top" };
LabelPositionTop.storyName = "Label:LabelPositionTop";

export const LabelLong: Story<ValenceProgressBarProps> = ProgressRender.bind(
  {}
);
LabelLong.args = {
  label: "Super long progress bar label. Sample label copy. Loading...",
};
LabelLong.storyName = "Label:Long";

export const LabelLongPositionSide: Story<ValenceProgressBarProps> =
  ProgressRender.bind({});
LabelLongPositionSide.args = {
  labelPosition: "side",
  label: "Super long progress bar label. Sample label copy. Loading...",
};
LabelLongPositionSide.storyName = "Label:LongPositionSide";

export const FormatOptionCurrencyStyle: Story<ValenceProgressBarProps> =
  ProgressRender.bind({});
FormatOptionCurrencyStyle.args = {
  showValueLabel: true,
  formatOptions,
};
FormatOptionCurrencyStyle.storyName = "FormatOptions:CurrencyStyle";

export const Indeterminate: Story<ValenceProgressBarProps> =
  ProgressRender.bind({});
Indeterminate.args = { isIndeterminate: true };
Indeterminate.storyName = "Indeterminate";

export const IndeterminateSizeS: Story<ValenceProgressBarProps> =
  ProgressRender.bind({});
IndeterminateSizeS.args = { isIndeterminate: true, size: 's' };
IndeterminateSizeS.storyName = "IndeterminateSizeS";


export const OverBackground: Story<ValenceProgressBarProps> = (props: any = {}) => {
  return ( <div style={grayedBoxStyle}>
            <ProgressRender {...props}/>
           </div>
        );
};
OverBackground.args = {
  variant: 'overBackground'
}

export const ParentWidth: Story<ValenceProgressBarProps> = (props: any = {}) => {
  return ( <div style={{width: '100%'}}>
            <ProgressRender {...props}/>
           </div>
        );
};
ParentWidth.storyName = 'ParentWidth:FullWidth';

export const ParentWidthNarrow: Story<ValenceProgressBarProps> = (props: any = {}) => {
  return ( <div style={{width: '100px'}}>
            <ProgressRender {...props}/>
           </div>
        );
};
ParentWidthNarrow.storyName = 'ParentWidth:Narrow';

export const WidthShort: Story<ValenceProgressBarProps> = ProgressRender.bind({});
WidthShort.storyName = 'Width:Short';
WidthShort.args = {
  width: 100
}

export const WidthShortIndeterminate: Story<ValenceProgressBarProps> = ProgressRender.bind({});
WidthShortIndeterminate.storyName = 'Width:ShortIndeterminate';
WidthShortIndeterminate.args = {
  width: 100,
  value: 100,
  isIndeterminate: true
}

export const WidthShortLabelPositionSide: Story<ValenceProgressBarProps> = ProgressRender.bind({});
WidthShortLabelPositionSide.storyName = 'Width:ShortLabelPositionSide';
WidthShortLabelPositionSide.args = {
  width: 100,
  value: 100,
  labelPosition: 'side'
}

export const WidthShortIndeterminateLabelPositionSide: Story<ValenceProgressBarProps> = ProgressRender.bind({});
WidthShortIndeterminateLabelPositionSide.storyName = 'Width:ShortIndeterminateLabelPositionSide';
WidthShortIndeterminateLabelPositionSide.args = {
  width: 100,
  value: 100,
  labelPosition: 'side',
  isIndeterminate: true
}

export const WidthLong: Story<ValenceProgressBarProps> = ProgressRender.bind({});
WidthLong.storyName = 'Width:Long';
WidthLong.args = {
  width: 400,
  value: 100
}

export const WidthLongIndeterminate: Story<ValenceProgressBarProps> = ProgressRender.bind({});
WidthLongIndeterminate.storyName = 'Width:LongIndeterminate';
WidthLongIndeterminate.args = {
  width: 400,
  value: 100,
  isIndeterminate: true
}

export const WidthLongLabelPositionSide: Story<ValenceProgressBarProps> = ProgressRender.bind({});
WidthLongLabelPositionSide.storyName = 'Width:LongLabelPositionSide';
WidthLongLabelPositionSide.args = {
  width: 400,
  value: 100,
  labelPosition: 'side'
}

export const WidthLongIndeterminateLabelPositionSide: Story<ValenceProgressBarProps> = ProgressRender.bind({});
WidthLongIndeterminateLabelPositionSide.storyName = 'Width:LongIndeterminateLabelPositionSide';
WidthLongIndeterminateLabelPositionSide.args = {
  width: 400,
  value: 100,
  labelPosition: 'side',
  isIndeterminate: true
}

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
