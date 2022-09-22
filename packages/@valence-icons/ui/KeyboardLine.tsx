import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _KeyboardLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 25.5h27v3H4.5v-3zm0 -9h4.5v4.5H4.5v-4.5zm7.5 0h4.5v4.5H12v-4.5zM4.5 7.5h4.5v4.5H4.5V7.5zm15 0h4.5v4.5h-4.5V7.5zm7.5 0h4.5v4.5h-4.5V7.5zm-7.5 9h4.5v4.5h-4.5v-4.5zm7.5 0h4.5v4.5h-4.5v-4.5zM12 7.5h4.5v4.5H12V7.5z" />
      </svg>
    </Icon>
  );
}
