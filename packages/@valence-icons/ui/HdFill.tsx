import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _HdFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm6.75 12.375V13.5H9v9h2.25v-3.375h3V22.5H16.5V13.5H14.25v3.375h-3zm10.5 -1.125H24a0.75 0.75 0 0 1 0.75 0.75v3a0.75 0.75 0 0 1 -0.75 0.75h-2.25v-4.5zM19.5 13.5v9h4.5a3 3 0 0 0 3 -3v-3a3 3 0 0 0 -3 -3h-4.5z" />
      </svg>
    </Icon>
  );
}
