import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _PaintBrushFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6 4.5h24a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm3 13.5h9a1.5 1.5 0 0 1 1.5 1.5v4.5h1.5v9h-6v-9h1.5v-3H7.5a1.5 1.5 0 0 1 -1.5 -1.5v-3h3v1.5zm17.598 2.598l2.652 -2.652 2.652 2.652a3.75 3.75 0 1 1 -5.304 0z" />
      </svg>
    </Icon>
  );
}
