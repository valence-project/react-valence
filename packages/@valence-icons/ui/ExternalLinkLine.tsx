import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ExternalLinkLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M15 9v3H7.5v16.5h16.5v-7.5h3v9a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V10.5a1.5 1.5 0 0 1 1.5 -1.5h9zm16.5 -4.5v12h-3V9.62l-11.69 11.691 -2.121 -2.121L26.378 7.5H19.5V4.5h12z" />
      </svg>
    </Icon>
  );
}
