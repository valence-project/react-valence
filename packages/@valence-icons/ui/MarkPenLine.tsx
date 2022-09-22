import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _MarkPenLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M22.864 6.772l-10.107 10.105 -1.06 3.181 -1.56 1.561 4.242 4.244 1.56 -1.561 3.183 -1.06 10.105 -10.107 -6.363 -6.363zm9.546 5.303a1.5 1.5 0 0 1 0 2.121l-11.668 11.668 -3.18 1.06 -2.123 2.121a1.5 1.5 0 0 1 -2.121 0l-6.365 -6.365a1.5 1.5 0 0 1 0 -2.121l2.121 -2.121 1.06 -3.181 11.668 -11.668a1.5 1.5 0 0 1 2.121 0l8.486 8.486zm-9.546 -1.06l2.121 2.121 -7.425 7.425 -2.121 -2.121 7.425 -7.425zM6.425 25.335l4.242 4.244 -2.121 2.121 -6.365 -2.121 4.242 -4.244z" />
      </svg>
    </Icon>
  );
}
