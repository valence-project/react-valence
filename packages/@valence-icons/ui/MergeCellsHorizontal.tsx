import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _MergeCellsHorizontal(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30 4.5c0.828 0 1.5 0.672 1.5 1.5v24c0 0.828 -0.672 1.5 -1.5 1.5H6c-0.828 0 -1.5 -0.672 -1.5 -1.5V6c0 -0.828 0.672 -1.5 1.5 -1.5h24zm-13.5 3H7.5v8.998h3V13.5l4.5 4.5 -4.5 4.5v-3H7.5v9h9v-3h3v3h9v-9h-3v3l-4.5 -4.5 4.5 -4.5v2.998h3V7.5h-9v3h-3V7.5zm3 12v3h-3v-3h3zm0 -6v3h-3V13.5h3z" />
      </svg>
    </Icon>
  );
}
