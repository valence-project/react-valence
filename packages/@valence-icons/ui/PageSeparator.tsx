import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _PageSeparator(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M25.5 31.5v-6H10.5v6H7.5v-7.5a1.5 1.5 0 0 1 1.5 -1.5h18a1.5 1.5 0 0 1 1.5 1.5v7.5h-3zM10.5 4.5v6h15V4.5h3v7.5a1.5 1.5 0 0 1 -1.5 1.5H9a1.5 1.5 0 0 1 -1.5 -1.5V4.5h3zM3 13.5l6 4.5 -6 4.5V13.5zm30 0v9l-6 -4.5 6 -4.5z" />
      </svg>
    </Icon>
  );
}
