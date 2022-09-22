import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _AddCircleLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M16.5 16.5V10.5h3v6h6v3h-6v6h-3v-6H10.5v-3h6zm1.5 16.5C9.716 33 3 26.285 3 18S9.716 3 18 3s15 6.716 15 15 -6.716 15 -15 15zm0 -3a12 12 0 1 0 0 -24 12 12 0 0 0 0 24z" />
      </svg>
    </Icon>
  );
}
