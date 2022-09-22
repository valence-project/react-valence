import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _VidiconFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M25.5 13.8l7.819 -5.475a0.75 0.75 0 0 1 1.181 0.615v18.12a0.75 0.75 0 0 1 -1.181 0.615L25.5 22.2V28.5a1.5 1.5 0 0 1 -1.5 1.5H3a1.5 1.5 0 0 1 -1.5 -1.5V7.5a1.5 1.5 0 0 1 1.5 -1.5h21a1.5 1.5 0 0 1 1.5 1.5v6.3zM7.5 12v3h3V12H7.5z" />
      </svg>
    </Icon>
  );
}
