import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _MarkdownFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm6 18.75v-6l3 3 3 -3v6h3v-10.5h-3l-3 3 -3 -3H7.5v10.5h3zm16.5 -4.5v-6h-3v6h-3l4.5 4.5 4.5 -4.5h-3z" />
      </svg>
    </Icon>
  );
}
