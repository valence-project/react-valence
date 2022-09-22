import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _VideoLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 5.989C4.5 5.167 5.167 4.5 5.989 4.5h24.021c0.822 0 1.49 0.667 1.49 1.49v24.021a1.491 1.491 0 0 1 -1.49 1.49H5.989A1.491 1.491 0 0 1 4.5 30.011V5.989zM7.5 7.5v21h21V7.5H7.5zm8.433 5.123l7.318 4.878a0.6 0.6 0 0 1 0 0.999l-7.32 4.878a0.6 0.6 0 0 1 -0.931 -0.498V13.12a0.6 0.6 0 0 1 0.933 -0.498z" />
      </svg>
    </Icon>
  );
}
