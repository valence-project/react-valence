import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _BatteryChargeFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 16.5V7.5l-7.5 12h4.5v9l7.5 -12h-4.5zM4.5 7.5h24a1.5 1.5 0 0 1 1.5 1.5v18a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V9a1.5 1.5 0 0 1 1.5 -1.5zm27 6h3v9h-3V13.5z" />
      </svg>
    </Icon>
  );
}
