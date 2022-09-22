import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _SafeFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M27 30H9v3H6v-3H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5h27a1.5 1.5 0 0 1 1.5 1.5v22.5a1.5 1.5 0 0 1 -1.5 1.5h-1.5v3h-3v-3zm-10.5 -9.189V25.5h3v-4.689A6.003 6.003 0 0 0 18 9a6 6 0 0 0 -1.5 11.811zM18 18a3 3 0 1 1 0 -6 3 3 0 0 1 0 6z" />
      </svg>
    </Icon>
  );
}
