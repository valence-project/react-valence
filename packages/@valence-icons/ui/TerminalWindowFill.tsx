import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _TerminalWindowFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30 15H6v13.5h24v-13.5zM4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm3 4.5v3h3V9H7.5zm6 0v3h3V9H13.5zm-6 7.5h4.5v7.5H7.5v-7.5z" />
      </svg>
    </Icon>
  );
}
