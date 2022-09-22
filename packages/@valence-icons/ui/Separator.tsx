import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _Separator(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M3 16.5h3v3H3v-3zm6 0h18v3H9v-3zm21 0h3v3h-3v-3z" />
      </svg>
    </Icon>
  );
}
