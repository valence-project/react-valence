import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _BarChartHorizontalLine(
  props: IconPropsWithoutChildren
) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 4.5v3H4.5V4.5h13.5zm6 24v3H4.5v-3h19.5zm9 -12v3H4.5v-3h28.5z" />
      </svg>
    </Icon>
  );
}
