import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _MailFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm13.59 13.024L8.472 9.357 6.529 11.643l11.58 9.832 11.372 -9.84 -1.962 -2.269 -9.428 8.159z" />
      </svg>
    </Icon>
  );
}
