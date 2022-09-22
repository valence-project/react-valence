import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _BatteryChargeLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M12 28.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V9a1.5 1.5 0 0 1 1.5 -1.5h9.938L12.687 10.5H6v15h6v3zm6.563 0l1.751 -3H27V10.5h-6V7.5h7.5a1.5 1.5 0 0 1 1.5 1.5v18a1.5 1.5 0 0 1 -1.5 1.5h-9.938zM31.5 13.5h3v9h-3V13.5zm-13.5 3h4.5l-7.5 12v-9H10.5l7.5 -12v9z" />
      </svg>
    </Icon>
  );
}
