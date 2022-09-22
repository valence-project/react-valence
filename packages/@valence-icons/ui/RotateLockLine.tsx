import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _RotateLockLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 3c8.284 0 15 6.716 15 15 0 3.204 -1.005 6.174 -2.716 8.611L25.5 18h4.5a12 12 0 1 0 -3.69 8.658l1.497 2.692A14.942 14.942 0 0 1 18 33C9.716 33 3 26.285 3 18S9.716 3 18 3zm0 7.5a4.5 4.5 0 0 1 4.5 4.5v1.5h1.5v7.5H12v-7.5h1.5v-1.5a4.5 4.5 0 0 1 4.5 -4.5zm3 9h-6v1.5h6v-1.5zm-3 -6a1.5 1.5 0 0 0 -1.49 1.325L16.5 15v1.5h3v-1.5a1.5 1.5 0 0 0 -1.325 -1.49L18 13.5z" />
      </svg>
    </Icon>
  );
}
