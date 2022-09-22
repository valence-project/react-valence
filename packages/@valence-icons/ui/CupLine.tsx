import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CupLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M24 19.5V7.5H9v12a3 3 0 0 0 3 3h9a3 3 0 0 0 3 -3zM7.5 4.5h22.5a3 3 0 0 1 3 3v4.5a3 3 0 0 1 -3 3h-3v4.5a6 6 0 0 1 -6 6H12a6 6 0 0 1 -6 -6V6a1.5 1.5 0 0 1 1.5 -1.5zm19.5 3v4.5h3V7.5h-3zM3 28.5h27v3H3v-3z" />
      </svg>
    </Icon>
  );
}
