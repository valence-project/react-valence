import { ColorSlider } from "@react-valence/color";
import { Flex } from "@react-valence/layout";
import { parseColor } from "@react-stately/color";
import React, { useState } from "react";
import { Story, action } from "@ladle/react";
import { Text } from "@react-valence/text";

import { ValenceColorSliderProps } from "@react-valence/color";

const ColorSliderRender: Story<ValenceColorSliderProps> = (props) => {
  return <ColorSlider defaultValue="#800000" channel={"red"} />;
};

export const NoValueLabel: Story<ValenceColorSliderProps> = (args) => (
  <ColorSlider defaultValue="#800000" channel={"red"} showValueLabel={false} />
);
export const CustomAriaLabel: Story<ValenceColorSliderProps> = (args) => (
  <ColorSlider
    defaultValue="#800000"
    channel={"red"}
    aria-label="Color Picker Channel: Red"
  />
);
export const Disabled: Story<ValenceColorSliderProps> = (args) => (
  <ColorSlider defaultValue="#333333" channel={"red"} isDisabled />
);
export const Vertical: Story<ValenceColorSliderProps> = (args) => (
  <ColorSlider defaultValue="#ff0000" channel={"red"} orientation="vertical" />
);
export const Controlled: Story<ValenceColorSliderProps> = (args) => (
  <ColorSlider value="#ff0000" channel={"red"} />
);
export const CustomHeight: Story<ValenceColorSliderProps> = (args) => (
  <ColorSlider
    defaultValue="#800000"
    channel={"red"}
    orientation="vertical"
    height={300}
  />
);
export const CustomWidth: Story<ValenceColorSliderProps> = (args) => (
  <ColorSlider defaultValue="#800000" channel={"red"} width={300} />
);
export const Rgba: Story<ValenceColorSliderProps> = (args) => {
  let [color, setColor] = useState(parseColor("#ff00ff"));
  return (
    <div role="group" aria-label="RGBA Color Picker">
      <Flex gap="size-500" alignItems="center">
        <Flex direction="column">
          <ColorSlider value={color} onChange={setColor} channel={"red"} />
          <ColorSlider value={color} onChange={setColor} channel={"green"} />
          <ColorSlider value={color} onChange={setColor} channel={"blue"} />
          <ColorSlider value={color} onChange={setColor} channel={"alpha"} />
        </Flex>
        <Flex direction="column" alignItems="center" gap="size-100">
          <div
            style={{
              width: "100px",
              height: "100px",
              background: color.toString("css"),
            }}
          />
          <Text>{color.toString("hexa")}</Text>
        </Flex>
      </Flex>
    </div>
  );
};
export const Hsla: Story<ValenceColorSliderProps> = (args) => {
  let [color, setColor] = useState(parseColor("hsla(0, 100%, 50%, 0.5)"));
  return (
    <div role="group" aria-label="HSLA Color Picker">
      <Flex gap="size-500" alignItems="center">
        <Flex direction="column">
          <ColorSlider value={color} onChange={setColor} channel={"hue"} />
          <ColorSlider
            value={color}
            onChange={setColor}
            channel={"saturation"}
          />
          <ColorSlider
            value={color}
            onChange={setColor}
            channel={"lightness"}
          />
          <ColorSlider value={color} onChange={setColor} channel={"alpha"} />
        </Flex>
        <Flex direction="column" alignItems="center" gap="size-100">
          <div
            style={{
              width: "100px",
              height: "100px",
              background: color.toString("css"),
            }}
          />
        </Flex>
      </Flex>
    </div>
  );
};

export const Hsba: Story<ValenceColorSliderProps> = (args) => {
  let [color, setColor] = useState(parseColor("hsba(0, 100%, 50%, 0.5)"));
  return (
    <div role="group" aria-label="HSBA Color Picker">
      <Flex gap="size-500" alignItems="center">
        <Flex direction="column">
          <ColorSlider value={color} onChange={setColor} channel={"hue"} />
          <ColorSlider
            value={color}
            onChange={setColor}
            channel={"saturation"}
          />
          <ColorSlider
            value={color}
            onChange={setColor}
            channel={"brightness"}
          />
          <ColorSlider value={color} onChange={setColor} channel={"alpha"} />
        </Flex>
        <Flex direction="column" alignItems="center" gap="size-100">
          <div
            style={{
              width: "100px",
              height: "100px",
              background: color.toString("css"),
            }}
          />
        </Flex>
      </Flex>
    </div>
  );
};
