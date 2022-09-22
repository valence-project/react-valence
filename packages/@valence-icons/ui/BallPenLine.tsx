import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _BallPenLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M26.773 17.712l-1.06 -1.06 -14.85 14.85H4.5v-6.365L21.47 8.166l8.486 8.486a1.5 1.5 0 0 1 0 2.121l-10.605 10.607 -2.123 -2.121 9.546 -9.546zm-3.181 -3.181l-2.123 -2.121L7.5 26.379v2.123h2.121l13.971 -13.971zm4.242 -10.607l4.244 4.242a1.5 1.5 0 0 1 0 2.121L29.955 12.409 23.592 6.045l2.121 -2.121a1.5 1.5 0 0 1 2.121 0z" />
      </svg>
    </Icon>
  );
}
