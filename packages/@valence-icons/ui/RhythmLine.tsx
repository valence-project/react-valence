import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _RhythmLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M3 13.5h3v18H3V13.5zm9 -9h3v27H12V4.5zm9 13.5h3v13.5h-3v-13.5zm9 -9h3v22.5h-3V9z" />
      </svg>
    </Icon>
  );
}
