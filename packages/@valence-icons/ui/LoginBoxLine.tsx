import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _LoginBoxLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6 22.5h3v7.5h18V6H9v7.5H6V4.5a1.5 1.5 0 0 1 1.5 -1.5h21a1.5 1.5 0 0 1 1.5 1.5v27a1.5 1.5 0 0 1 -1.5 1.5H7.5a1.5 1.5 0 0 1 -1.5 -1.5v-9zm9 -6V12l7.5 6 -7.5 6v-4.5H3v-3h12z" />
      </svg>
    </Icon>
  );
}
