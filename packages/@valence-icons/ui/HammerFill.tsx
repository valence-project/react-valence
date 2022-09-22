import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _HammerFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M25.5 12V3h4.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1 -1.5 1.5h-4.5zm-3 21a1.5 1.5 0 0 1 -1.5 1.5h-6a1.5 1.5 0 0 1 -1.5 -1.5V12H3.75V9.111a1.5 1.5 0 0 1 0.744 -1.294L12.75 3H22.5v30z" />
      </svg>
    </Icon>
  );
}
