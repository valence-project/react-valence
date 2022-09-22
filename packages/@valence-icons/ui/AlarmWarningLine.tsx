import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _AlarmWarningLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6 30v-9a12 12 0 1 1 24 0v9h1.5v3H4.5v-3h1.5zm3 0h18v-9a9 9 0 1 0 -18 0v9zm7.5 -27h3v4.5h-3V3zm13.167 4.212l2.121 2.121 -3.18 3.181 -2.123 -2.121 3.181 -3.181zM4.212 9.333l2.121 -2.121 3.181 3.18L7.395 12.516 4.212 9.333zM10.5 21a7.5 7.5 0 0 1 7.5 -7.5v3a4.5 4.5 0 0 0 -4.5 4.5H10.5z" />
      </svg>
    </Icon>
  );
}
