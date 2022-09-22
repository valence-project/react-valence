import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ImageAddLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M31.5 22.5v4.5h4.5v3h-4.5v4.5h-3v-4.5h-4.5v-3h4.5v-4.5h3zm0.012 -18c0.822 0 1.488 0.667 1.488 1.49V19.5h-3V7.5H6v20.998L21 13.5l4.5 4.5v4.244l-4.5 -4.5L10.241 28.5H21v3H4.488A1.49 1.49 0 0 1 3 30.011V5.989A1.5 1.5 0 0 1 4.488 4.5h27.024zM12 10.5a3 3 0 1 1 0 6 3 3 0 0 1 0 -6z" />
      </svg>
    </Icon>
  );
}
