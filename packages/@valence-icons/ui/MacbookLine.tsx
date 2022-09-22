import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _MacbookLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6 7.5v16.5h24V7.5H6zm-3 -1.49C3 5.176 3.683 4.5 4.488 4.5h27.024c0.822 0 1.488 0.673 1.488 1.51V27H3V6.01zM1.5 28.5h33v3H1.5v-3z" />
      </svg>
    </Icon>
  );
}
