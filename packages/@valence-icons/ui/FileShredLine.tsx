import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FileShredLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M9 18h18V12h-6V6H9v12zm-3 0V4.492c0 -0.825 0.667 -1.492 1.494 -1.492H22.5l7.5 7.5v7.5h3v3H3v-3h3zm-1.5 6h3v9H4.5v-9zm24 0h3v9h-3v-9zm-6 0h3v9h-3v-9zm-6 0h3v9h-3v-9zm-6 0h3v9H10.5v-9z" />
      </svg>
    </Icon>
  );
}
