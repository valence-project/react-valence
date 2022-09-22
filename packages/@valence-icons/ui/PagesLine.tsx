import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _PagesLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M7.5 12v18h21V12H7.5zm0 -3h21V6H7.5v3zm22.5 24H6a1.5 1.5 0 0 1 -1.5 -1.5V4.5a1.5 1.5 0 0 1 1.5 -1.5h24a1.5 1.5 0 0 1 1.5 1.5v27a1.5 1.5 0 0 1 -1.5 1.5zM10.5 15h6v6H10.5v-6zm0 9h15v3H10.5v-3zm9 -7.5h6v3h-6v-3z" />
      </svg>
    </Icon>
  );
}
