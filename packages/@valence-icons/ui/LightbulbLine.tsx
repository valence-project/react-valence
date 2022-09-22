import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _LightbulbLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M14.96 27H16.5v-7.5h3v7.5h1.54c0.198 -1.803 1.117 -3.291 2.61 -4.915 0.17 -0.183 1.248 -1.3 1.376 -1.46a9 9 0 1 0 -14.055 -0.003c0.129 0.161 1.211 1.28 1.377 1.461 1.494 1.626 2.413 3.114 2.612 4.917zM15 30v1.5h6v-1.5h-6zm-6.369 -7.5a12 12 0 1 1 18.735 0.003C26.436 23.661 24 25.5 24 27.75V31.5a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3v-3.75C12 25.5 9.563 23.661 8.631 22.5z" />
      </svg>
    </Icon>
  );
}
