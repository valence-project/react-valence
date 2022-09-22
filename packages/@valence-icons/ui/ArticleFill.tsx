import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ArticleFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30 33H6a1.5 1.5 0 0 1 -1.5 -1.5V4.5a1.5 1.5 0 0 1 1.5 -1.5h24a1.5 1.5 0 0 1 1.5 1.5v27a1.5 1.5 0 0 1 -1.5 1.5zM10.5 9v6h6V9H10.5zm0 9v3h15v-3H10.5zm0 6v3h15v-3H10.5zm9 -13.5v3h6V10.5h-6z" />
      </svg>
    </Icon>
  );
}
