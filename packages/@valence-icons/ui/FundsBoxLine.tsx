import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FundsBoxLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6 7.5v21h24V7.5H6zM4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm17.689 10.19L19.5 12h7.5v7.5l-2.689 -2.689 -5.796 5.796 -3.181 -3.181 -4.244 4.242 -2.121 -2.121 6.365 -6.365 3.181 3.183 3.675 -3.675z" />
      </svg>
    </Icon>
  );
}
