import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _TerminalBoxLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm1.5 3v21h24V7.5H6zm12 15h9v3h-9v-3zm-5 -4.5L8.757 13.758l2.123 -2.123L17.242 18l-6.363 6.365 -2.123 -2.123L13 18z" />
      </svg>
    </Icon>
  );
}
