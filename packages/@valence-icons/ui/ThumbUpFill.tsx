import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ThumbUpFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M3 13.5h4.5v18H3a1.5 1.5 0 0 1 -1.5 -1.5V15a1.5 1.5 0 0 1 1.5 -1.5zm7.94 -1.939l9.6 -9.6a0.75 0.75 0 0 1 0.981 -0.071l1.28 0.96a2.25 2.25 0 0 1 0.83 2.355L21.9 12H31.5a3 3 0 0 1 3 3v3.156a3 3 0 0 1 -0.225 1.143l-4.643 11.272a1.5 1.5 0 0 1 -1.388 0.928H12a1.5 1.5 0 0 1 -1.5 -1.5V12.621a1.5 1.5 0 0 1 0.44 -1.06z" />
      </svg>
    </Icon>
  );
}
