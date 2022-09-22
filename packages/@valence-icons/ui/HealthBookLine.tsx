import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _HealthBookLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30 3c0.828 0 1.5 0.672 1.5 1.5v27c0 0.828 -0.672 1.5 -1.5 1.5H9c-0.828 0 -1.5 -0.672 -1.5 -1.5v-3H4.5v-3h3v-3H4.5v-3h3v-3H4.5V13.5h3V10.5H4.5V7.5h3V4.5c0 -0.828 0.672 -1.5 1.5 -1.5h21zm-1.5 3H10.5v24h18V6zm-7.5 6v4.5h4.5v3h-4.502L21 24h-3l-0.002 -4.5H13.5v-3h4.5V12h3z" />
      </svg>
    </Icon>
  );
}
