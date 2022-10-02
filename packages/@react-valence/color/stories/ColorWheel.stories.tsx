import { Story, action } from "@ladle/react";
import { ColorWheel } from "../src";
import { Well } from "@react-valence/well";
import { Flex } from "@react-valence/layout";

import { parseColor } from "@react-stately/color";

import React, { useState } from "react";

import { ValenceColorWheelProps } from "@types-valence/color";

export default {
  title: "Colorwheel",
  component: ColorWheel,
};

const ColorWheelRender: Story<ValenceColorWheelProps> = (args) => (
  <Well>
    <ColorWheel {...args} />
  </Well>
);

export const Default: Story<ValenceColorWheelProps> = ColorWheelRender.bind({});
Default.args = {
  defaultValue: "hsl(0, 100%, 50%)",
};

export const Disabled: Story<ValenceColorWheelProps> = ColorWheelRender.bind(
  {}
);
Disabled.args = {
  isDisabled: true,
  defaultValue: "hsl(0, 100%, 50%)",
};

export const CustomSize: Story<ValenceColorWheelProps> = (props) => {
  let [size, setSize] = useState("size-2400");
  return (
    <Flex direction="column" alignItems="center" gap="size-200">
      <Flex direction="row">
        <button onClick={() => setSize("size-2400")}>size-2400</button>
        <button onClick={() => setSize("size-5000")}>size-5000</button>
        <button onClick={() => setSize("50vh")}>50vh</button>
      </Flex>
      <ColorWheel defaultValue="hsl(0, 100%, 50%)" size={size} />
    </Flex>
  );
};

export const Controlled: Story<ValenceColorWheelProps> = (props) => {
  let [color, setColor] = useState(parseColor("hsl(0, 100%, 50%)"));
  let colorCSS = color?.toString("css");
  return (
    <Flex gap={"size-500"} direction="row" alignItems="center">
      <ColorWheel onChange={setColor} value={color} />
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: colorCSS,
          border: "1px solid black",
        }}
      />
    </Flex>
  );
};

const ControlledHSLRender: Story<ValenceColorWheelProps> = (props) => {
  let [color, setColor] = useState(
    props.defaultValue || parseColor("hsl(0, 100%, 50%)")
  );
  let colorCSS = color.toString("css");
  let onChangeEnd = (color) => {
    props.onChangeEnd && props.onChangeEnd(color);
    setColor(color);
  };
  let onChange = (color) => {
    props.onChange && props.onChange(color);
    setColor(color);
  };
  return (
    <>
      <ColorWheel
        onChange={onChange}
        onChangeEnd={onChangeEnd}
        value={color.toString("hsl")}
      />
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: colorCSS,
          border: "1px solid black",
        }}
      />
    </>
  );
};

export const ControlledHSL: Story<ValenceColorWheelProps> = (props) => {
  return (
    <Flex gap={"size-500"} direction="row" alignItems="center">
      <ControlledHSLRender onChangeEnd={console.log} />
    </Flex>
  );
};
