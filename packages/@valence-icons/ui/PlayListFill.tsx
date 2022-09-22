import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _PlayListFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M3 27h15v3H3v-3zm0 -10.5h21v3H3v-3zm0 -10.5h30v3H3V6zm25.5 16.755V13.5h7.5v3h-4.5v10.5a4.5 4.5 0 1 1 -3 -4.245z" />
      </svg>
    </Icon>
  );
}
