import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _KeyboardBoxLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6 7.5v21h24V7.5H6zM4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm4.5 6h3v3H9V10.5zm0 6h3v3H9v-3zm0 6h18v3H9v-3zm7.5 -6h3v3h-3v-3zm0 -6h3v3h-3V10.5zm7.5 0h3v3h-3V10.5zm0 6h3v3h-3v-3z" />
      </svg>
    </Icon>
  );
}
