import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _NumbersFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M13.5 27H6v-12h7.5v12zm9 0h-7.5V9h7.5v18zm9 0h-7.5V3h7.5v24zm1.5 6H4.5v-3h28.5v3z" />
      </svg>
    </Icon>
  );
}
