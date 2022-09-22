import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _BankCardLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm25.5 12H6v12h24v-12zm0 -3V7.5H6v6h24zm-9 9h6v3h-6v-3z" />
      </svg>
    </Icon>
  );
}
