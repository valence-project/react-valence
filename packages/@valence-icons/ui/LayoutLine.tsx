import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _LayoutLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M7.5 12h21V7.5H7.5v4.5zm13.5 16.5v-13.5H7.5v13.5h13.5zm3 0h4.5v-13.5h-4.5v13.5zM6 4.5h24a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5z" />
      </svg>
    </Icon>
  );
}
