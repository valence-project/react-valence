import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _IncreaseDecreaseLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm1.5 3v21h24V7.5H6zm7.5 9h3v3H13.5v3H10.5v-3H7.5v-3h3V13.5h3v3zm6 0h9v3h-9v-3z" />
      </svg>
    </Icon>
  );
}
