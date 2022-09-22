import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _MailLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm25.5 6.357l-11.892 10.65L6 10.824V28.5h24V10.857zM6.767 7.5l11.325 9.993L29.253 7.5H6.767z" />
      </svg>
    </Icon>
  );
}
