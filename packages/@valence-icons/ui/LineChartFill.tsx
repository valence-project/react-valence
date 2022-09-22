import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _LineChartFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M7.5 4.5v24h24v3H4.5V4.5h3zm22.41 4.41l3.18 3.18L24 21.183l-4.5 -4.5 -5.91 5.91 -3.18 -3.183L19.5 10.32l4.5 4.5 5.91 -5.91z" />
      </svg>
    </Icon>
  );
}
