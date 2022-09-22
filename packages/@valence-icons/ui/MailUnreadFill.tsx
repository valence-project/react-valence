import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _MailUnreadFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M28.205 12.739A7.534 7.534 0 0 0 33 13.35V30a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5h19.65c-0.099 0.485 -0.15 0.987 -0.15 1.5a7.47 7.47 0 0 0 1.79 4.862l-7.698 6.663 -9.621 -8.168 -1.941 2.286 11.58 9.832 10.095 -8.736zM31.5 10.5a4.5 4.5 0 1 1 0 -9 4.5 4.5 0 0 1 0 9z" />
      </svg>
    </Icon>
  );
}
