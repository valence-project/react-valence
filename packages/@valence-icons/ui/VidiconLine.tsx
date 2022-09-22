import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _VidiconLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M25.5 13.8l7.819 -5.475a0.75 0.75 0 0 1 1.181 0.615v18.12a0.75 0.75 0 0 1 -1.181 0.615L25.5 22.2V28.5a1.5 1.5 0 0 1 -1.5 1.5H3a1.5 1.5 0 0 1 -1.5 -1.5V7.5a1.5 1.5 0 0 1 1.5 -1.5h21a1.5 1.5 0 0 1 1.5 1.5v6.3zm0 4.739l6 4.2V13.26l-6 4.2v1.077zM4.5 9v18h18V9H4.5zm3 3h3v3H7.5V12z" />
      </svg>
    </Icon>
  );
}
