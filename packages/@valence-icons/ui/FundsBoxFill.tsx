import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FundsBoxFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm17.689 10.19l-3.675 3.675 -3.181 -3.183 -6.365 6.365 2.121 2.121 4.244 -4.242 3.181 3.181 5.796 -5.796L27 19.5V12h-7.5l2.689 2.689z" />
      </svg>
    </Icon>
  );
}
