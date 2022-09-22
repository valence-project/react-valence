import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _PolaroidFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30.988 15a9 9 0 1 0 0 6H31.5v9a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5h24a1.5 1.5 0 0 1 1.5 1.5v9h-0.512zM7.5 9v4.5h3V9H7.5zm15 15a6 6 0 1 1 0 -12 6 6 0 0 1 0 12zm0 -3a3 3 0 1 0 0 -6 3 3 0 0 0 0 6z" />
      </svg>
    </Icon>
  );
}
