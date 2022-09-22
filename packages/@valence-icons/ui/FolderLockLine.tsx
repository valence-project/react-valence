import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FolderLockLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18.621 7.5H31.5a1.5 1.5 0 0 1 1.5 1.5v21a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5h11.121l3 3zM6 7.5v21h24V10.5h-12.621l-3 -3H6zm16.5 12h1.5v6H12v-6h1.5v-1.5a4.5 4.5 0 0 1 9 0v1.5zm-3 0v-1.5a1.5 1.5 0 0 0 -3 0v1.5h3z" />
      </svg>
    </Icon>
  );
}
