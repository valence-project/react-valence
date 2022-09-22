import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _BusFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M25.5 30H10.5v1.5a1.5 1.5 0 0 1 -1.5 1.5H7.5a1.5 1.5 0 0 1 -1.5 -1.5v-1.5H4.5v-12H3V12h1.5V7.5a3 3 0 0 1 3 -3h21a3 3 0 0 1 3 3v4.5h1.5v6h-1.5v12h-1.5v1.5a1.5 1.5 0 0 1 -1.5 1.5h-1.5a1.5 1.5 0 0 1 -1.5 -1.5v-1.5zM7.5 7.5v13.5h21V7.5H7.5zm0 16.5v3h6v-3H7.5zm15 0v3h6v-3h-6z" />
      </svg>
    </Icon>
  );
}
