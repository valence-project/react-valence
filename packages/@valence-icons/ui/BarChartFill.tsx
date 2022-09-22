import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _BarChartFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 18h6v13.5H4.5v-13.5zm21 -6h6v19.5h-6V12zm-10.5 -9h6v28.5h-6V3z" />
      </svg>
    </Icon>
  );
}
