import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _Paragraph(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 9v22.5h-3v-7.5a9 9 0 1 1 0 -18h15v3h-4.5v22.5h-3V9h-4.5zm-3 0a6 6 0 1 0 0 12V9z" />
      </svg>
    </Icon>
  );
}
