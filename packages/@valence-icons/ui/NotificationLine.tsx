import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _NotificationLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M7.5 27h21v-10.454C28.5 10.722 23.799 6 18 6s-10.5 4.722 -10.5 10.546V27zm10.5 -24c7.455 0 13.5 6.065 13.5 13.547V30H4.5v-13.453C4.5 9.065 10.545 3 18 3zM14.25 31.5h7.5a3.75 3.75 0 1 1 -7.5 0z" />
      </svg>
    </Icon>
  );
}
