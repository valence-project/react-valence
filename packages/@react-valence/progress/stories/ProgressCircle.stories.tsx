import { ProgressCircle } from "@react-valence/progress";
import React, { CSSProperties } from "react";
import { Story } from "@ladle/react";

import { ValenceProgressCircleProps } from "@react-valence/progress";

const grayedBoxStyle: CSSProperties = {
  width: "100px",
  height: "100px",
  backgroundColor: "rgba(0,0,0,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const ProgressCircleRender: Story<ValenceProgressCircleProps> = (props) => {
  props = {
    value: 42,
    ...props,
  }
  return <ProgressCircle {...props}/>;
}

export const Default: Story<ValenceProgressCircleProps> = ProgressCircleRender.bind({});

export const FiftyPercent: Story<ValenceProgressCircleProps> = ProgressCircleRender.bind({});
FiftyPercent.args = { value: 50 }

export const OneHundredPercent: Story<ValenceProgressCircleProps> = ProgressCircleRender.bind({});
OneHundredPercent.args = { value: 100 }

export const SizeSmall: Story<ValenceProgressCircleProps> = ProgressCircleRender.bind({});
SizeSmall.args = { size: 'S' }
SizeSmall.storyName = 'Size:Small'

export const SizeLarge: Story<ValenceProgressCircleProps> = ProgressCircleRender.bind({});
SizeLarge.args = { size: 'L' }
SizeLarge.storyName = 'Size:Large'


export const OverBackground: Story<ValenceProgressCircleProps> = (props) => {
  props = {
    value: 42,
    ...props,
  }
  return ( <div style={grayedBoxStyle}>
            <ProgressCircleRender {...props}/>
           </div>);
}
OverBackground.args = {
  variant: 'overBackground'
}

export const OverBackgroundIndeterminate: Story<ValenceProgressCircleProps> = OverBackground.bind({});
OverBackgroundIndeterminate.args = { variant: 'overBackground', isIndeterminate: true };
OverBackgroundIndeterminate.storyName = 'Indeterminate:OverBackground'

export const IndeterminateSizeSmall: Story<ValenceProgressCircleProps> = ProgressCircleRender.bind({});
IndeterminateSizeSmall.args = { size: 'S', isIndeterminate: true }
IndeterminateSizeSmall.storyName = 'Indeterminate:Small'

export const IndeterminateSizeLarge: Story<ValenceProgressCircleProps> = ProgressCircleRender.bind({});
IndeterminateSizeLarge.args = { size: 'L', isIndeterminate: true }
IndeterminateSizeLarge.storyName = 'Indeterminate:Large'

export const IndeterminateDefault: Story<ValenceProgressCircleProps> = ProgressCircleRender.bind({});
IndeterminateDefault.args = { isIndeterminate: true }
IndeterminateDefault.storyName = 'Indeterminate:Default'