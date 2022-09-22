import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _MailUnreadLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M24.15 4.5a7.534 7.534 0 0 0 0 3H6.767l11.325 9.993 7.574 -6.78c0.639 0.79 1.437 1.449 2.345 1.927l-9.902 8.866L6 10.824V28.5h24V13.35a7.534 7.534 0 0 0 3 0V30a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5h19.65zM31.5 10.5a4.5 4.5 0 1 1 0 -9 4.5 4.5 0 0 1 0 9z" />
      </svg>
    </Icon>
  );
}
