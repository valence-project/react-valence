import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CpuLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M9 27h18V9H9v18zm12 3h-6v3H12v-3H7.5a1.5 1.5 0 0 1 -1.5 -1.5v-4.5H3v-3h3v-6H3V12h3V7.5a1.5 1.5 0 0 1 1.5 -1.5h4.5V3h3v3h6V3h3v3h4.5a1.5 1.5 0 0 1 1.5 1.5v4.5h3v3h-3v6h3v3h-3v4.5a1.5 1.5 0 0 1 -1.5 1.5h-4.5v3h-3v-3zM12 12h12v12H12V12z" />
      </svg>
    </Icon>
  );
}
