import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _WindowFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm25.5 10.5H6v13.5h24v-13.5zM7.5 9v3h3V9H7.5zm6 0v3h3V9H13.5z" />
      </svg>
    </Icon>
  );
}
