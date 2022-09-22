import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _NumbersLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M13.5 27H6v-12h7.5v12zm-3 -3v-6H9v6h1.5zm9 0V12h-1.5v12h1.5zm3 3h-7.5V9h7.5v18zm6 -3V6h-1.5v18h1.5zm3 3h-7.5V3h7.5v24zm1.5 6H4.5v-3h28.5v3z" />
      </svg>
    </Icon>
  );
}
