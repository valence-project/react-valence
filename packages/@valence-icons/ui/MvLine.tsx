import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _MvLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M3 5.989A1.5 1.5 0 0 1 4.488 4.5h27.024c0.822 0 1.488 0.667 1.488 1.49v24.021a1.5 1.5 0 0 1 -1.488 1.49H4.488A1.49 1.49 0 0 1 3 30.011V5.989zM6 7.5v21h24V7.5H6zm12 10.755V9h7.5v3h-4.5v10.5a4.5 4.5 0 1 1 -3 -4.245z" />
      </svg>
    </Icon>
  );
}
