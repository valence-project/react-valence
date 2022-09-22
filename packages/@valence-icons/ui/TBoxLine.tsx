import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _TBoxLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M7.5 7.5v21h21V7.5H7.5zM6 4.5h24a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm13.5 10.5v10.5h-3v-10.5H10.5V12h15v3h-6z" />
      </svg>
    </Icon>
  );
}
