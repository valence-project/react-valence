import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _DraftLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30 3c0.828 0 1.5 0.672 1.5 1.5v5.636l-3 3V6H7.5v24h21v-4.137l3 -3V31.5c0 0.828 -0.672 1.5 -1.5 1.5H6c-0.828 0 -1.5 -0.672 -1.5 -1.5V4.5c0 -0.828 0.672 -1.5 1.5 -1.5h24zm2.667 10.212l2.121 2.121L23.121 27l-2.124 -0.003 0.003 -2.118 11.667 -11.667zM19.5 18v3H12v-3h7.5zm4.5 -6v3H12V12h12z" />
      </svg>
    </Icon>
  );
}
