import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _MailAddLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M33 19.5h-3V10.857l-11.892 10.65L6 10.824V28.5h15v3H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5h27a1.5 1.5 0 0 1 1.5 1.5v13.5zM6.767 7.5l11.325 9.993L29.253 7.5H6.767zM31.5 27h4.5v3h-4.5v4.5h-3v-4.5h-4.5v-3h4.5v-4.5h3v4.5z" />
      </svg>
    </Icon>
  );
}
