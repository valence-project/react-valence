import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _BitCoinFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 33C9.716 33 3 26.285 3 18S9.716 3 18 3s15 6.716 15 15 -6.716 15 -15 15zm-1.5 -9v3h3v-3h1.5a3.75 3.75 0 0 0 3 -6 3.75 3.75 0 0 0 -3 -6h-1.5V9h-3v3H12v12h4.5zm-1.5 -4.5h6a0.75 0.75 0 1 1 0 1.5h-6v-1.5zm0 -4.5h6a0.75 0.75 0 1 1 0 1.5h-6v-1.5z" />
      </svg>
    </Icon>
  );
}
