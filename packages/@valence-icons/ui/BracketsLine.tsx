import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _BracketsLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M13.5 4.5v3H9v21h4.5v3H6V4.5h7.5zm9 0h7.5v27h-7.5v-3h4.5V7.5h-4.5V4.5z" />
      </svg>
    </Icon>
  );
}
