import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ExternalLinkFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M15 9v3H7.5v16.5h16.5v-7.5h3v9a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V10.5a1.5 1.5 0 0 1 1.5 -1.5h9zm16.5 -4.5v13.5l-5.691 -5.69 -8.998 9 -2.121 -2.121 8.998 -9L18 4.5h13.5z" />
      </svg>
    </Icon>
  );
}
