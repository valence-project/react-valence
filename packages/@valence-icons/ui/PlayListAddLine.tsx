import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _PlayListAddLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M3 27h15v3H3v-3zm0 -10.5h30v3H3v-3zm0 -10.5h30v3H3V6zm24 21v-4.5h3v4.5h4.5v3h-4.5v4.5h-3v-4.5h-4.5v-3h4.5z" />
      </svg>
    </Icon>
  );
}
