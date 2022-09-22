import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _AlarmWarningFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6 30v-9a12 12 0 1 1 24 0v9h1.5v3H4.5v-3h1.5zm3 -9h3a6 6 0 0 1 6 -6V12a9 9 0 0 0 -9 9zm7.5 -18h3v4.5h-3V3zm13.167 4.212l2.121 2.121 -3.18 3.181 -2.123 -2.121 3.181 -3.181zM4.212 9.333l2.121 -2.121 3.181 3.18L7.395 12.516 4.212 9.333z" />
      </svg>
    </Icon>
  );
}
