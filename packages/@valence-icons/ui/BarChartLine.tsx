import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _BarChartLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 18h3v13.5H4.5v-13.5zm24 -6h3v19.5h-3V12zm-12 -9h3v28.5h-3V3z" />
      </svg>
    </Icon>
  );
}
