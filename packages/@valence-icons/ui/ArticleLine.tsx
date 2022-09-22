import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ArticleLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30 33H6a1.5 1.5 0 0 1 -1.5 -1.5V4.5a1.5 1.5 0 0 1 1.5 -1.5h24a1.5 1.5 0 0 1 1.5 1.5v27a1.5 1.5 0 0 1 -1.5 1.5zm-1.5 -3V6H7.5v24h21zM10.5 9h6v6H10.5V9zm0 9h15v3H10.5v-3zm0 6h15v3H10.5v-3zm9 -13.5h6v3h-6V10.5z" />
      </svg>
    </Icon>
  );
}
