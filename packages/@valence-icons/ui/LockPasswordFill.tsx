import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _LockPasswordFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M27 12h3a1.5 1.5 0 0 1 1.5 1.5v18a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V13.5a1.5 1.5 0 0 1 1.5 -1.5h3V10.5a9 9 0 1 1 18 0v1.5zm-3 0V10.5a6 6 0 1 0 -12 0v1.5h12zm-7.5 9v3h3v-3h-3zm-6 0v3h3v-3H10.5zm12 0v3h3v-3h-3z" />
      </svg>
    </Icon>
  );
}
