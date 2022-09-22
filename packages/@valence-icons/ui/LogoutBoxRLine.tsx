import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _LogoutBoxRLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M7.5 33a1.5 1.5 0 0 1 -1.5 -1.5V4.5a1.5 1.5 0 0 1 1.5 -1.5h21a1.5 1.5 0 0 1 1.5 1.5v4.5h-3V6H9v24h18v-3h3v4.5a1.5 1.5 0 0 1 -1.5 1.5H7.5zm19.5 -9v-4.5h-10.5v-3h10.5V12l7.5 6 -7.5 6z" />
      </svg>
    </Icon>
  );
}
