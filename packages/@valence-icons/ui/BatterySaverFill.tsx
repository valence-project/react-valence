import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _BatterySaverFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M21 3a1.5 1.5 0 0 1 1.5 1.5v1.5h4.5a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H9a1.5 1.5 0 0 1 -1.5 -1.5V7.5a1.5 1.5 0 0 1 1.5 -1.5h4.5V4.5a1.5 1.5 0 0 1 1.5 -1.5h6zm-1.5 10.5h-3v4.5H12v3h4.5v4.5h3v-4.5h4.5v-3h-4.5V13.5z" />
      </svg>
    </Icon>
  );
}
