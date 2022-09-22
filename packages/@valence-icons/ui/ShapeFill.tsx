import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ShapeFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M7.5 12a4.5 4.5 0 1 1 0 -9 4.5 4.5 0 0 1 0 9zm21 0a4.5 4.5 0 1 1 0 -9 4.5 4.5 0 0 1 0 9zm0 21a4.5 4.5 0 1 1 0 -9 4.5 4.5 0 0 1 0 9zM7.5 33a4.5 4.5 0 1 1 0 -9 4.5 4.5 0 0 1 0 9zM13.5 6h9v3H13.5V6zm0 21h9v3H13.5v-3zM6 13.5h3v9H6V13.5zm21 0h3v9h-3V13.5z" />
      </svg>
    </Icon>
  );
}
