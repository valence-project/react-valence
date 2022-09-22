import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _MergeCellsVertical(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M31.5 30c0 0.828 -0.672 1.5 -1.5 1.5H6c-0.828 0 -1.5 -0.672 -1.5 -1.5V6c0 -0.828 0.672 -1.5 1.5 -1.5h24c0.828 0 1.5 0.672 1.5 1.5v24zm-3 -13.5V7.5h-8.998v3H22.5l-4.5 4.5 -4.5 -4.5h3V7.5H7.5v9h3v3H7.5v9h9v-3H13.5l4.5 -4.5 4.5 4.5h-2.998v3H28.5v-9h-3v-3h3zm-12 3H13.5v-3h3v3zm6 0h-3v-3h3v3z" />
      </svg>
    </Icon>
  );
}
