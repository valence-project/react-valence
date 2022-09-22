import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _SlideshowLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M19.5 31.5v3h-3v-3H4.5a1.5 1.5 0 0 1 -1.5 -1.5V9h30v21a1.5 1.5 0 0 1 -1.5 1.5h-12zm-13.5 -3h24V12H6v16.5zm13.5 -13.5h7.5v3h-7.5v-3zm0 6h7.5v3h-7.5v-3zm-6 -6v4.5h4.5a4.5 4.5 0 1 1 -4.5 -4.5zM3 4.5h30v3H3V4.5z" />
      </svg>
    </Icon>
  );
}
