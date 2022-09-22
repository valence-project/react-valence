import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _PhoneLockLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M27 3a1.5 1.5 0 0 1 1.5 1.5v10.5h-3V6H10.5v24h7.5v3H9a1.5 1.5 0 0 1 -1.5 -1.5V4.5a1.5 1.5 0 0 1 1.5 -1.5h18zm0 15a4.5 4.5 0 0 1 4.5 4.5v1.5h1.5v7.5a1.5 1.5 0 0 1 -1.5 1.5h-9a1.5 1.5 0 0 1 -1.5 -1.5v-7.5h1.5v-1.5a4.5 4.5 0 0 1 4.5 -4.5zm3 9h-6v3h6v-3zm-3 -6c-0.762 0 -1.5 0.675 -1.5 1.5v1.5h3v-1.5a1.5 1.5 0 0 0 -1.5 -1.5z" />
      </svg>
    </Icon>
  );
}
