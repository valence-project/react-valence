import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _MailStarLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M33 19.5h-3V10.857l-11.892 10.65L6 10.824V28.5h15v3H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5h27a1.5 1.5 0 0 1 1.5 1.5v13.5zM6.767 7.5l11.325 9.993L29.253 7.5H6.767zM29.25 32.625l-3.968 2.085 0.758 -4.417 -3.21 -3.129 4.435 -0.645L29.25 22.5l1.984 4.02 4.435 0.645 -3.21 3.127 0.758 4.419L29.25 32.625z" />
      </svg>
    </Icon>
  );
}
