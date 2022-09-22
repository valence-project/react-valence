import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ProfileLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M3 5.989A1.5 1.5 0 0 1 4.488 4.5h27.024c0.822 0 1.488 0.667 1.488 1.49v24.021a1.5 1.5 0 0 1 -1.488 1.49H4.488A1.49 1.49 0 0 1 3 30.011V5.989zM6 7.5v21h24V7.5H6zm3 3h9v9H9V10.5zm3 3v3h3V13.5H12zm-3 9h18v3H9v-3zm12 -12h6v3h-6V10.5zm0 6h6v3h-6v-3z" />
      </svg>
    </Icon>
  );
}
