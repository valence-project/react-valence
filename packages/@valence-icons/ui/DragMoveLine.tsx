import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _DragMoveLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 3l6.365 6.365 -2.123 2.121L18 7.242 13.758 11.486 11.636 9.364 18 3zM3 18l6.365 -6.365 2.121 2.123L7.242 18l4.244 4.242 -2.121 2.123L3 18zm30 0l-6.365 6.365 -2.121 -2.123L28.758 18l-4.244 -4.242 2.121 -2.123L33 18zm-15 3a3 3 0 1 1 0 -6 3 3 0 0 1 0 6zm0 12l-6.365 -6.365 2.123 -2.121L18 28.758l4.242 -4.244 2.123 2.121L18 33z" />
      </svg>
    </Icon>
  );
}
