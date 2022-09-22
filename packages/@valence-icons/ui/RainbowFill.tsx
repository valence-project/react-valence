import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _RainbowFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 6c9.113 0 16.5 7.387 16.5 16.5v7.5h-4.5v-7.5a12 12 0 0 0 -11.625 -11.994L18 10.5a12 12 0 0 0 -11.994 11.625L6 22.5v7.5H1.5v-7.5C1.5 13.388 8.887 6 18 6zm0 6a10.5 10.5 0 0 1 10.5 10.5v7.5h-4.5v-7.5a6 6 0 0 0 -5.7 -5.992L18 16.5a6 6 0 0 0 -5.992 5.7L12 22.5v7.5H7.5v-7.5a10.5 10.5 0 0 1 10.5 -10.5zm0 6a4.5 4.5 0 0 1 4.5 4.5v7.5H13.5v-7.5a4.5 4.5 0 0 1 4.5 -4.5z" />
      </svg>
    </Icon>
  );
}
