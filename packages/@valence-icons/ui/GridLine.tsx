import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _GridLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M21 15h-6v6h6v-6zm3 0v6h4.5v-6h-4.5zm-3 13.5v-4.5h-6v4.5h6zm3 0h4.5v-4.5h-4.5v4.5zM21 7.5h-6v4.5h6V7.5zm3 0v4.5h4.5V7.5h-4.5zm-12 7.5H7.5v6h4.5v-6zm0 13.5v-4.5H7.5v4.5h4.5zM12 7.5H7.5v4.5h4.5V7.5zM6 4.5h24a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5z" />
      </svg>
    </Icon>
  );
}
