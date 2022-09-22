import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FileZipLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30 33H6a1.5 1.5 0 0 1 -1.5 -1.5V4.5a1.5 1.5 0 0 1 1.5 -1.5h24a1.5 1.5 0 0 1 1.5 1.5v27a1.5 1.5 0 0 1 -1.5 1.5zm-1.5 -3V6H7.5v24h21zm-7.5 -12v7.5h-6v-4.5h3v-3h3zm-3 -12h3v3h-3V6zm-3 3h3v3h-3V9zm3 3h3v3h-3V12zm-3 3h3v3h-3v-3z" />
      </svg>
    </Icon>
  );
}
