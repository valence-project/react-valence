import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _BatteryLowFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 7.5h24a1.5 1.5 0 0 1 1.5 1.5v18a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V9a1.5 1.5 0 0 1 1.5 -1.5zm3 4.5v12h6V12H7.5zm24 1.5h3v9h-3V13.5z" />
      </svg>
    </Icon>
  );
}
