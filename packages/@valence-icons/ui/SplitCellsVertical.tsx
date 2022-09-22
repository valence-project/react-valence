import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _SplitCellsVertical(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30 4.5c0.828 0 1.5 0.672 1.5 1.5v24c0 0.828 -0.672 1.5 -1.5 1.5H6c-0.828 0 -1.5 -0.672 -1.5 -1.5V6c0 -0.828 0.672 -1.5 1.5 -1.5h24zm-1.5 3H7.5v8.998L13.5 16.5v3H7.5v9h21v-9h-6v-3l6 -0.002V7.5zm-10.5 1.5l4.5 4.5h-3v9h3l-4.5 4.5 -4.5 -4.5h3V13.5H13.5l4.5 -4.5z" />
      </svg>
    </Icon>
  );
}
