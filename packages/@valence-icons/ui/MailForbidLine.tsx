import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _MailForbidLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30 10.857l-11.892 10.65L6 10.824V28.5h10.605a10.425 10.425 0 0 0 0.906 3H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5h27a1.5 1.5 0 0 1 1.5 1.5v12.383a10.458 10.458 0 0 0 -3 -1.448V10.857zM29.252 7.5H6.767l11.325 9.993L29.253 7.5zm-4.191 23.562a4.5 4.5 0 0 0 6.002 -6.002l-6.002 6zm-2.123 -2.123l6.002 -6a4.5 4.5 0 0 0 -6.002 6.002zM27 34.5a7.5 7.5 0 1 1 0 -15 7.5 7.5 0 0 1 0 15z" />
      </svg>
    </Icon>
  );
}
