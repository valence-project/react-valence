import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _DeleteBinLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M25.5 9h7.5v3h-3v19.5a1.5 1.5 0 0 1 -1.5 1.5H7.5a1.5 1.5 0 0 1 -1.5 -1.5V12H3V9h7.5V4.5a1.5 1.5 0 0 1 1.5 -1.5h12a1.5 1.5 0 0 1 1.5 1.5v4.5zm1.5 3H9v18h18V12zm-13.5 4.5h3v9H13.5v-9zm6 0h3v9h-3v-9zM13.5 6v3h9V6H13.5z" />
      </svg>
    </Icon>
  );
}
