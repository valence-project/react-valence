import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _AddBoxLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6 4.5h24a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm1.5 3v21h21V7.5H7.5zm9 9V10.5h3v6h6v3h-6v6h-3v-6H10.5v-3h6z" />
      </svg>
    </Icon>
  );
}
