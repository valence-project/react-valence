import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _RadioLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M25.5 15V12h-3v3H7.5V9h21v6h-3zM9 4.5V1.5h3v3h19.512c0.822 0 1.488 0.667 1.488 1.49v24.021a1.5 1.5 0 0 1 -1.488 1.49H4.488A1.49 1.49 0 0 1 3 30.011V5.989A1.5 1.5 0 0 1 4.488 4.5H9zM6 7.5v21h24V7.5H6zm6 19.5a4.5 4.5 0 1 1 0 -9 4.5 4.5 0 0 1 0 9z" />
      </svg>
    </Icon>
  );
}
