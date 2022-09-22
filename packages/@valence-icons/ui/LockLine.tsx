import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _LockLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M28.5 15h1.5a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V16.5a1.5 1.5 0 0 1 1.5 -1.5h1.5V13.5a10.5 10.5 0 1 1 21 0v1.5zM7.5 18v12h21v-12H7.5zm9 3h3v6h-3v-6zm9 -6V13.5A7.5 7.5 0 0 0 10.5 13.5v1.5h15z" />
      </svg>
    </Icon>
  );
}
