import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CelsiusFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6.75 15a5.25 5.25 0 1 1 0 -10.5 5.25 5.25 0 0 1 0 10.5zm0 -3a2.25 2.25 0 1 0 0 -4.5 2.25 2.25 0 0 0 0 4.5zM33 15h-3a6 6 0 1 0 -12 0v7.5a6 6 0 1 0 12 0h3a9 9 0 1 1 -18 0v-7.5a9 9 0 1 1 18 0z" />
      </svg>
    </Icon>
  );
}
