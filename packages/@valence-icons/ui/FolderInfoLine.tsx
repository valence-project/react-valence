import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FolderInfoLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18.621 7.5H31.5a1.5 1.5 0 0 1 1.5 1.5v21a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5h11.121l3 3zM6 7.5v21h24V10.5h-12.621l-3 -3H6zm10.5 10.5h3v7.5h-3v-7.5zm0 -4.5h3v3h-3V13.5z" />
      </svg>
    </Icon>
  );
}
