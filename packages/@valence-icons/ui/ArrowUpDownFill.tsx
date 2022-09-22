import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ArrowUpDownFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 12H12.002L12 30H9V12H3l7.5 -7.5 7.5 7.5zm15 12l-7.5 7.5 -7.5 -7.5h6V6h3v18h6z" />
      </svg>
    </Icon>
  );
}
