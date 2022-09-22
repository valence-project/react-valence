import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _MailCheckLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M33 21h-3V10.857l-11.892 10.65L6 10.824V28.5h15v3H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5h27a1.5 1.5 0 0 1 1.5 1.5v15zM6.767 7.5l11.325 9.993L29.253 7.5H6.767zM28.5 33l-5.304 -5.304 2.123 -2.121L28.5 28.758l5.304 -5.304 2.121 2.121L28.5 33z" />
      </svg>
    </Icon>
  );
}
