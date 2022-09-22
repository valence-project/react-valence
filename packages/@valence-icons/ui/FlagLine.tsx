import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FlagLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M7.5 24v9H4.5V4.5h14.073a1.5 1.5 0 0 1 1.341 0.83L21 7.5h9a1.5 1.5 0 0 1 1.5 1.5v16.5a1.5 1.5 0 0 1 -1.5 1.5h-9.573a1.5 1.5 0 0 1 -1.341 -0.83L18 24H7.5zM7.5 7.5v13.5h12.354l1.5 3H28.5V10.5h-9.354l-1.5 -3H7.5z" />
      </svg>
    </Icon>
  );
}
