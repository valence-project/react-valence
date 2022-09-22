import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _SideBarLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm7.5 3H6v21h6V7.5zm3 0v21h15V7.5H15z" />
      </svg>
    </Icon>
  );
}
