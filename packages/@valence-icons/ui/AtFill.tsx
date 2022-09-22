import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _AtFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 33C9.716 33 3 26.285 3 18S9.716 3 18 3s15 6.716 15 15 -6.716 15 -15 15zm12 -15a12 12 0 1 0 -5.952 10.366l-1.512 -2.591A9 9 0 1 1 27 18v1.5a1.5 1.5 0 0 1 -3 0V13.5h-2.031a6 6 0 1 0 0.099 8.91A4.5 4.5 0 0 0 30 19.5v-1.5zm-12 -3a3 3 0 1 1 0 6 3 3 0 0 1 0 -6z" />
      </svg>
    </Icon>
  );
}
