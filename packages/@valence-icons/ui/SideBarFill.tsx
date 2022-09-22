import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _SideBarFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm9 3v21h16.5V7.5H13.5z" />
      </svg>
    </Icon>
  );
}
