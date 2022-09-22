import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _SeedlingLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M9 4.5c5.235 0 9.575 3.831 10.37 8.842C21.132 11.586 23.565 10.5 26.25 10.5H33v3.75c0 5.385 -4.365 9.75 -9.75 9.75H19.5v7.5h-3v-12H13.5c-5.799 0 -10.5 -4.701 -10.5 -10.5V4.5h6zm21 9h-3.75c-3.728 0 -6.75 3.022 -6.75 6.75v0.75h3.75c3.728 0 6.75 -3.022 6.75 -6.75V13.5zM9 7.5H6v1.5c0 4.142 3.358 7.5 7.5 7.5h3v-1.5c0 -4.142 -3.358 -7.5 -7.5 -7.5z" />
      </svg>
    </Icon>
  );
}
