import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _IncreaseDecreaseFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm9 12V13.5H10.5v3H7.5v3h3v3h3v-3h3v-3H13.5zm6 0v3h9v-3h-9z" />
      </svg>
    </Icon>
  );
}
