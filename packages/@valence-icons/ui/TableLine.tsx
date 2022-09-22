import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _TableLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6 12h24V7.5H6v4.5zm15 16.5v-13.5h-6v13.5h6zm3 0h6v-13.5h-6v13.5zm-12 0v-13.5H6v13.5h6zM4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5z" />
      </svg>
    </Icon>
  );
}
