import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _RemoteControlLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M25.5 18a1.5 1.5 0 0 1 1.5 1.5v13.5h-3v-12H12v12H9v-13.5a1.5 1.5 0 0 1 1.5 -1.5h15zm-7.5 6v3h-3v-3h3zm0 -15a9 9 0 0 1 8.052 4.974l-2.685 1.343a6 6 0 0 0 -10.736 0l-2.683 -1.343A9 9 0 0 1 18 9zm0 -6a15 15 0 0 1 13.419 8.29l-2.683 1.343A12 12 0 0 0 18 6a12 12 0 0 0 -10.736 6.633l-2.685 -1.343A15 15 0 0 1 18 3z" />
      </svg>
    </Icon>
  );
}
