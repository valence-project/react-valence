import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _HdLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6 7.5v21h24V7.5H6zM4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm6.75 12.375h3V13.5H16.5v9H14.25v-3.375h-3V22.5H9V13.5h2.25v3.375zm10.5 -1.125v4.5H24a0.75 0.75 0 0 0 0.75 -0.75v-3a0.75 0.75 0 0 0 -0.75 -0.75h-2.25zM19.5 13.5h4.5a3 3 0 0 1 3 3v3a3 3 0 0 1 -3 3h-4.5V13.5z" />
      </svg>
    </Icon>
  );
}
