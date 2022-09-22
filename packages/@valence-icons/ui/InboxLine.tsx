import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _InboxLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm25.5 16.5h-5.124a7.502 7.502 0 0 1 -13.752 0H6v7.5h24v-7.5zm0 -3V7.5H6v10.5h7.5a4.5 4.5 0 0 0 9 0h7.5z" />
      </svg>
    </Icon>
  );
}
