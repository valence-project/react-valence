import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _TerminalWindowLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30 13.5V7.5H6v6h24zm0 3H6v12h24v-12zM4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm3 13.5h4.5v7.5H7.5v-7.5zm0 -9h3v3H7.5V9zm6 0h3v3H13.5V9z" />
      </svg>
    </Icon>
  );
}
