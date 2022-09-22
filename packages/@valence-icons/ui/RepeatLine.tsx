import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _RepeatLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M9 6h22.5a1.5 1.5 0 0 1 1.5 1.5v10.5h-3V9H9v4.5L1.5 7.5l7.5 -6v4.5zm18 24H4.5a1.5 1.5 0 0 1 -1.5 -1.5v-10.5h3v9h21v-4.5l7.5 6 -7.5 6v-4.5z" />
      </svg>
    </Icon>
  );
}
