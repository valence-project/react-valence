import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _StockFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M12 7.5h4.5v13.5H12v4.5H9v-4.5H4.5V7.5h4.5V3h3v4.5zm15 7.5h4.5v13.5h-4.5v4.5h-3v-4.5h-4.5v-13.5h4.5V10.5h3v4.5z" />
      </svg>
    </Icon>
  );
}
