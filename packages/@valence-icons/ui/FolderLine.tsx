import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FolderLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6 7.5v21h24V10.5h-12.621l-3 -3H6zm12.621 0H31.5a1.5 1.5 0 0 1 1.5 1.5v21a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5h11.121l3 3z" />
      </svg>
    </Icon>
  );
}
