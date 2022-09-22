import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _BarChartHorizontalFill(
  props: IconPropsWithoutChildren
) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 4.5v6H4.5V4.5h13.5zm6 21v6H4.5v-6h19.5zm9 -10.5v6H4.5v-6h28.5z" />
      </svg>
    </Icon>
  );
}
