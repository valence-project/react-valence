import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _TerminalBoxFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm13.5 18v3h9v-3h-9zm-5.379 -4.5l-4.242 4.242L10.5 24.364 16.864 18 10.5 11.636 8.379 13.758 12.621 18z" />
      </svg>
    </Icon>
  );
}
