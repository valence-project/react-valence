import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _LockUnlockLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M10.5 15h19.5a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V16.5a1.5 1.5 0 0 1 1.5 -1.5h1.5V13.5a10.5 10.5 0 0 1 19.893 -4.696l-2.683 1.341A7.5 7.5 0 0 0 10.5 13.5v1.5zm-3 3v12h21v-12H7.5zm7.5 4.5h6v3h-6v-3z" />
      </svg>
    </Icon>
  );
}
