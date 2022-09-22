import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ArrowUpLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M19.5 11.742V30h-3V11.742l-8.046 8.046 -2.121 -2.121L18 6l11.667 11.667 -2.121 2.121L19.5 11.742z" />
      </svg>
    </Icon>
  );
}
