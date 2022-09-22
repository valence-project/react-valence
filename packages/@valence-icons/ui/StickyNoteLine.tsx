import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _StickyNoteLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M31.5 22.5l-9 8.994L6.003 31.5A1.497 1.497 0 0 1 4.5 30.011V5.989C4.5 5.167 5.167 4.5 5.989 4.5h24.021c0.822 0 1.49 0.684 1.49 1.503V22.5zM28.5 7.5H7.5v21h12v-7.5a1.5 1.5 0 0 1 1.325 -1.49L21 19.5l7.5 -0.002V7.5zm-1.244 14.998L22.5 22.5v4.753l4.756 -4.755z" />
      </svg>
    </Icon>
  );
}
