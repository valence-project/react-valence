import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ArrowLeftLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M11.742 16.5H30v3H11.742l8.046 8.046 -2.121 2.121L6 18l11.667 -11.667 2.121 2.121z" />
      </svg>
    </Icon>
  );
}
