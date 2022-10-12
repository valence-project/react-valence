import { action, Story } from "@ladle/react";
import { Flex, Grid as _Grid } from "@react-valence/layout";
import React from "react";
import { View } from "@react-valence/view";

import { FlexProps, GridProps } from "@types-valence/layout";

let baseColors = [
  "celery",
  "chartreuse",
  "yellow",
  "magenta",
  "fuchsia",
  "purple",
  "indigo",
  "seafoam",
  "red",
  "orange",
  "green",
  "blue",
];

let colors = [];
for (let color of baseColors) {
  for (let i = 4; i <= 7; i++) {
    colors.push(`${color}-${i}00`);
  }
}


export const Grid: Story<GridProps> = (props) => (
  <Flex
    direction={{ base: "column", L: "row" }}
    gap={{ base: "size-100", M: "size-250", L: "size-350" }}
  >
    <View backgroundColor="celery-600" width="size-800" height="size-800" />
    <View backgroundColor="blue-600" width="size-800" height="size-800" />
    <View backgroundColor="magenta-600" width="size-800" height="size-800" />
  </Flex>
);
Grid.argTypes = {
  align: {
    options: ['center', 'end'],
    control: {
      type: 'select'
    }
  }
}

export const VerticalStackWithGap: Story<FlexProps> = (args) => (
  <Flex direction="column" width="size-2000" gap="size-100">
    <View backgroundColor="celery-600" height="size-800" />
    <View backgroundColor="blue-600" height="size-800" />
    <View backgroundColor="magenta-600" height="size-800" />
  </Flex>
);

export const HorizontalStackWithGap: Story<FlexProps> = (args) => (
  <Flex direction="row" height="size-800" gap="size-100">
    <View backgroundColor="celery-600" width="size-800" />
    <View backgroundColor="blue-600" width="size-800" />
    <View backgroundColor="magenta-600" width="size-800" />
  </Flex>
);

export const WrappingWithGap: Story<FlexProps> = (args) => (
  <View maxWidth="80%" borderWidth="thin" borderColor="dark">
    <Flex direction="row" gap="size-100" wrap>
      {colors.map((color) => (
        <View
          key={color}
          backgroundColor={color}
          width="size-800"
          height="size-800"
        />
      ))}
    </Flex>
  </View>
);

export const NestedFlexWithGap: Story<FlexProps> = (args) => (
  <Flex direction="column" gap="size-150">
    <View backgroundColor="celery-600" height="size-800" />
    <Flex direction="row" height="size-800" gap="size-100">
      <View backgroundColor="indigo-600" width="size-800" />
      <View backgroundColor="seafoam-600" width="size-800" />
      <View backgroundColor="blue-600" width="size-800" />
    </Flex>
    <View backgroundColor="magenta-600" height="size-800" />
  </Flex>
);

export const AlignCenter: Story<FlexProps> = (args) => (
  <Flex direction="row" gap="size-100" alignItems="center">
    <View backgroundColor="celery-600" width="size-800" height="size-800" />
    <View backgroundColor="blue-600" width="size-800" height="size-2000" />
    <View backgroundColor="magenta-600" width="size-800" height="size-800" />
  </Flex>
);
AlignCenter.storyName = "Align:Center";

export const AlignEnd: Story<FlexProps> = (args) => (
  <Flex direction="row" gap="size-100" alignItems="end">
    <View backgroundColor="celery-600" width="size-800" height="size-800" />
    <View backgroundColor="blue-600" width="size-800" height="size-2000" />
    <View backgroundColor="magenta-600" width="size-800" height="size-800" />
  </Flex>
);
AlignEnd.storyName = "Align:End";

export const JustifyStart: Story<FlexProps> = (args) => (
  <Flex direction="row" gap="size-100" justifyContent="start" width="80%">
    <View backgroundColor="celery-600" width="size-800" height="size-800" />
    <View backgroundColor="blue-600" width="size-800" height="size-800" />
    <View backgroundColor="magenta-600" width="size-800" height="size-800" />
  </Flex>
);
JustifyStart.storyName = "Justify:Start";

export const JustifyCenter: Story<FlexProps> = (args) => (
  <Flex direction="row" gap="size-100" justifyContent="center" width="80%">
    <View backgroundColor="celery-600" width="size-800" height="size-800" />
    <View backgroundColor="blue-600" width="size-800" height="size-800" />
    <View backgroundColor="magenta-600" width="size-800" height="size-800" />
  </Flex>
);
JustifyCenter.storyName = "Justify:Center";

export const JustifyEnd: Story<FlexProps> = (args) => (
  <Flex direction="row" gap="size-100" justifyContent="end" width="80%">
    <View backgroundColor="celery-600" width="size-800" height="size-800" />
    <View backgroundColor="blue-600" width="size-800" height="size-800" />
    <View backgroundColor="magenta-600" width="size-800" height="size-800" />
  </Flex>
);
JustifyEnd.storyName = "Justify:End";

export const JustifySpaceAround: Story<FlexProps> = (args) => (
  <Flex
    direction="row"
    gap="size-100"
    justifyContent="space-around"
    width="80%"
  >
    <View backgroundColor="celery-600" width="size-800" height="size-800" />
    <View backgroundColor="blue-600" width="size-800" height="size-800" />
    <View backgroundColor="magenta-600" width="size-800" height="size-800" />
  </Flex>
);
JustifySpaceAround.storyName = "Justify:SpaceAround";

export const JustifySpaceBetween: Story<FlexProps> = (args) => (
  <Flex
    direction="row"
    gap="size-100"
    justifyContent="space-between"
    width="80%"
  >
    <View backgroundColor="celery-600" width="size-800" height="size-800" />
    <View backgroundColor="blue-600" width="size-800" height="size-800" />
    <View backgroundColor="magenta-600" width="size-800" height="size-800" />
  </Flex>
);
JustifySpaceBetween.storyName = "Justify:SpaceBetween";

export const JustifySpaceEvenly: Story<FlexProps> = (args) => (
  <Flex
    direction="row"
    gap="size-100"
    justifyContent="space-evenly"
    width="80%"
  >
    <View backgroundColor="celery-600" width="size-800" height="size-800" />
    <View backgroundColor="blue-600" width="size-800" height="size-800" />
    <View backgroundColor="magenta-600" width="size-800" height="size-800" />
  </Flex>
);

export const Ordered: Story<FlexProps> = (args) => (
  <Flex
    direction="row"
    gap="size-100"
    justifyContent="space-evenly"
    width="80%"
  >
    <View
      backgroundColor="celery-600"
      order={2}
      width="size-800"
      height="size-800"
    />
    <View backgroundColor="blue-600" width="size-800" height="size-800" />
    <View
      backgroundColor="magenta-600"
      order={1}
      width="size-800"
      height="size-800"
    />
  </Flex>
);

export const Responsive: Story<FlexProps> = (args) => (
  <Flex
    direction={{ base: "column", L: "row" }}
    gap={{ base: "size-100", M: "size-250", L: "size-350" }}
  >
    <View backgroundColor="celery-600" width="size-800" height="size-800" />
    <View backgroundColor="blue-600" width="size-800" height="size-800" />
    <View backgroundColor="magenta-600" width="size-800" height="size-800" />
  </Flex>
);

export const Skunk: Story<FlexProps> = (props) => <Grid {...props}/>;
Skunk.args = {align: 'end'}
Skunk.argTypes = {
  align: {
    options: ['center', 'end'],
    control: {
      type: 'select'
    }
  }
}