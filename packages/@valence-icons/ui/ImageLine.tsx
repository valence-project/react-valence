import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ImageLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M7.242 31.5l-0.03 0.03 -0.032 -0.03H4.488A1.49 1.49 0 0 1 3 30.011V5.989A1.5 1.5 0 0 1 4.488 4.5h27.024c0.822 0 1.488 0.667 1.488 1.49v24.021a1.5 1.5 0 0 1 -1.488 1.49H7.242zM30 22.5V7.5H6v21L21 13.5l9 9zm0 4.242l-9 -9L10.242 28.5H30v-1.758zM12 16.5a3 3 0 1 1 0 -6 3 3 0 0 1 0 6z" />
      </svg>
    </Icon>
  );
}
