import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ChatHeartFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M9.683 28.5L3 33.75V6a1.5 1.5 0 0 1 1.5 -1.5h27a1.5 1.5 0 0 1 1.5 1.5v21a1.5 1.5 0 0 1 -1.5 1.5H9.683zm8.345 -6.45l5.038 -5.038a3.375 3.375 0 0 0 -4.773 -4.773l-0.265 0.265 -0.265 -0.265a3.375 3.375 0 0 0 -4.773 4.773l5.038 5.038z" />
      </svg>
    </Icon>
  );
}
