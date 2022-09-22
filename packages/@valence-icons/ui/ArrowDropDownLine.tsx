import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ArrowDropDownLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 22.5l-6.365 -6.365 2.123 -2.121L18 18.258l4.242 -4.244 2.123 2.121z" />
      </svg>
    </Icon>
  );
}
