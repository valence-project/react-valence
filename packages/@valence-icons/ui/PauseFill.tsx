import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _PauseFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M9 7.5h3v21H9V7.5zm15 0h3v21h-3V7.5z" />
      </svg>
    </Icon>
  );
}
