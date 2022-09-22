import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _AddLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M16.5 16.5V7.5h3v9h9v3h-9v9h-3v-9H7.5v-3z" />
      </svg>
    </Icon>
  );
}
