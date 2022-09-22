import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _HomeHeartFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30 30a1.5 1.5 0 0 1 -1.5 1.5H7.5a1.5 1.5 0 0 1 -1.5 -1.5v-13.5H1.5l15.491 -14.082a1.5 1.5 0 0 1 2.019 0L34.5 16.5h-4.5v13.5zm-12 -4.5l5.038 -5.038a3.375 3.375 0 1 0 -4.773 -4.773l-0.265 0.265 -0.265 -0.265a3.375 3.375 0 1 0 -4.773 4.773L18 25.5z" />
      </svg>
    </Icon>
  );
}
