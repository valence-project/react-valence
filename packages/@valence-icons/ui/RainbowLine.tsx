import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _RainbowLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 6c9.113 0 16.5 7.387 16.5 16.5v7.5h-3v-7.5a13.5 13.5 0 0 0 -13.102 -13.494L18 9a13.5 13.5 0 0 0 -13.494 13.102L4.5 22.5v7.5H1.5v-7.5C1.5 13.388 8.887 6 18 6zm0 6a10.5 10.5 0 0 1 10.5 10.5v7.5h-3v-7.5a7.5 7.5 0 0 0 -7.175 -7.492L18 15a7.5 7.5 0 0 0 -7.492 7.175L10.5 22.5v7.5H7.5v-7.5a10.5 10.5 0 0 1 10.5 -10.5zm0 6a4.5 4.5 0 0 1 4.5 4.5v7.5h-3v-7.5a1.5 1.5 0 0 0 -1.325 -1.49L18 21a1.5 1.5 0 0 0 -1.49 1.325L16.5 22.5v7.5H13.5v-7.5a4.5 4.5 0 0 1 4.5 -4.5z" />
      </svg>
    </Icon>
  );
}
