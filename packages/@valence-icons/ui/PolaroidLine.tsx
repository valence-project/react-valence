import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _PolaroidLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M31.5 9h-3V7.5H7.5v21h21v-1.5h3v3a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5h24a1.5 1.5 0 0 1 1.5 1.5v3zM9 9h3v4.5H9V9zm13.5 15a6 6 0 1 0 0 -12 6 6 0 0 0 0 12zm0 3a9 9 0 1 1 0 -18 9 9 0 0 1 0 18zm0 -6a3 3 0 1 1 0 -6 3 3 0 0 1 0 6z" />
      </svg>
    </Icon>
  );
}
