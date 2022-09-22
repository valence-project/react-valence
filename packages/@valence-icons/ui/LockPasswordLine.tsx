import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _LockPasswordLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M27 12h3a1.5 1.5 0 0 1 1.5 1.5v18a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V13.5a1.5 1.5 0 0 1 1.5 -1.5h3V10.5a9 9 0 1 1 18 0v1.5zM7.5 15v15h21V15H7.5zm9 6h3v3h-3v-3zm-6 0h3v3H10.5v-3zm12 0h3v3h-3v-3zm1.5 -9V10.5a6 6 0 1 0 -12 0v1.5h12z" />
      </svg>
    </Icon>
  );
}
