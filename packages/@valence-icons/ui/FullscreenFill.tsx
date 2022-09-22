import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FullscreenFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M24 4.5h9v9h-3V7.5h-6V4.5zM3 4.5h9v3H6v6H3V4.5zm27 24v-6h3v9h-9v-3h6zM6 28.5h6v3H3v-9h3v6z" />
      </svg>
    </Icon>
  );
}
