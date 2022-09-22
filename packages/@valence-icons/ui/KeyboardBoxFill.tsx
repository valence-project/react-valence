import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _KeyboardBoxFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm3 6v3h3V10.5H7.5zm0 6v3h3v-3H7.5zm0 6v3h21v-3H7.5zm6 -6v3h3v-3H13.5zm0 -6v3h3V10.5H13.5zm6 0v3h3V10.5h-3zm6 0v3h3V10.5h-3zm-6 6v3h3v-3h-3zm6 0v3h3v-3h-3z" />
      </svg>
    </Icon>
  );
}
