import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _PagesFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30 33H6a1.5 1.5 0 0 1 -1.5 -1.5V12h27v19.5a1.5 1.5 0 0 1 -1.5 1.5zm1.5 -24H4.5V4.5a1.5 1.5 0 0 1 1.5 -1.5h24a1.5 1.5 0 0 1 1.5 1.5v4.5zM10.5 16.5v6h6v-6H10.5zm0 9v3h15v-3H10.5zm9 -7.5v3h6v-3h-6z" />
      </svg>
    </Icon>
  );
}
