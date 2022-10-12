
import { action, Story } from "@ladle/react";
import { Grid, repeat } from "@react-valence/layout";
import React from "react";
import { View } from "@react-valence/view";

import { GridProps} from "@react-valence/layout"

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

export const ExplicitGrid: Story<GridProps> = (args) => ( <Grid areas={["header  header", "sidebar content", "footer  footer"]} columns={["size-3000", "auto"]} rows={["size-1000", "auto", "size-1000"]} height="size-6000" width="80%" gap="size-100" > <View backgroundColor="celery-600" gridArea="header" padding="size-100"> Header </View> <View backgroundColor="blue-600" gridArea="sidebar" padding="size-100"> Sidebar </View> <View backgroundColor="purple-600" gridArea="content" padding="size-100"> Content </View> <View backgroundColor="magenta-600" gridArea="footer" padding="size-100"> Footer </View> </Grid> );
export const ImplicitGrid: Story<GridProps> = (args) => ( <Grid columns={repeat("auto-fit", "size-800")} autoRows="size-800" justifyContent="center" width="80%" gap="size-100" > {colors.map((color) => ( <View key={color} backgroundColor={color} /> ))}</Grid>);
export const Responsive: Story<GridProps> = (args) => ( <Grid columns={{ base: repeat("auto-fit", "size-800"), M: repeat("auto-fit", "size-1200"), L: repeat("auto-fit", "size-2000"), }} autoRows={{ base: "size-800", M: "size-1200", L: "size-2000" }} justifyContent="center" width="80%" gap={{ base: "size-100", M: "size-250", L: "size-350" }} > {colors.map((color) => ( <View key={color} backgroundColor={color} /> ))}</Grid>);