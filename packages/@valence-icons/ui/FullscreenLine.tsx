import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FullscreenLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30 4.5h3v9h-3V7.5h-6V4.5h6zM6 4.5h6v3H6v6H3V4.5h3zm24 24v-6h3v9h-9v-3h6zM6 28.5h6v3H3v-9h3v6z" />
      </svg>
    </Icon>
  );
}
