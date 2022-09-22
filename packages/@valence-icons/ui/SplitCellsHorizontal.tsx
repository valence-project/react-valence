import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _SplitCellsHorizontal(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30 4.5c0.828 0 1.5 0.672 1.5 1.5v24c0 0.828 -0.672 1.5 -1.5 1.5H6c-0.828 0 -1.5 -0.672 -1.5 -1.5V6c0 -0.828 0.672 -1.5 1.5 -1.5h24zm-13.5 3H7.5v21h9v-6h3v6h9V7.5h-9v6h-3V7.5zm6 6l4.5 4.5 -4.5 4.5v-3H13.5v3l-4.5 -4.5 4.5 -4.5v3h9V13.5z" />
      </svg>
    </Icon>
  );
}
