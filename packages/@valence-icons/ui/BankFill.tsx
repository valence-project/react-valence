import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _BankFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M3 30h30v3H3v-3zm3 -12h3v10.5H6v-10.5zm7.5 0h3v10.5H13.5v-10.5zm6 0h3v10.5h-3v-10.5zm7.5 0h3v10.5h-3v-10.5zM3 10.5l15 -7.5 15 7.5v6H3V10.5zm15 1.5a1.5 1.5 0 1 0 0 -3 1.5 1.5 0 0 0 0 3z" />
      </svg>
    </Icon>
  );
}
