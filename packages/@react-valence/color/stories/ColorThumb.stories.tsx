import { ColorThumb } from "../src/ColorThumb";
import { parseColor } from "@react-stately/color";
import React from "react";
import { Story } from "@ladle/react";

import {ColorThumbProps} from '../src/ColorThumb'

const ColorThumbRender: Story<ColorThumbProps> = (args) => {
  return <ColorThumb value={parseColor("#f00")} {...args} />
}

export const Default: Story<ColorThumbProps> = ColorThumbRender.bind({});

export const Disabled: Story<ColorThumbProps> = ColorThumbRender.bind({});
Disabled.args = {
  isDisabled: true
}

export const Focused: Story<ColorThumbProps> = ColorThumbRender.bind({});
Focused.args = {
  isFocused: true
}

export const FocusedDragging: Story<ColorThumbProps> = ColorThumbRender.bind({});
FocusedDragging.args = {
  isFocused: true,
  isDragging: true
}

export const FocusedDraggingAlpha: Story<ColorThumbProps> = ColorThumbRender.bind({});
FocusedDraggingAlpha.args = {
  isFocused: true,
  isDragging: true,
  value: parseColor("hsla(0, 100%, 100%, 0)")
}
