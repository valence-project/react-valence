import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _GridFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M21 15v6h-6v-6h6zm3 0h7.5v6h-7.5v-6zm-3 16.5h-6v-7.5h6v7.5zm3 0v-7.5h7.5v6a1.5 1.5 0 0 1 -1.5 1.5h-6zM21 4.5v7.5h-6V4.5h6zm3 0h6a1.5 1.5 0 0 1 1.5 1.5v6h-7.5V4.5zm-12 10.5v6H4.5v-6h7.5zm0 16.5H6a1.5 1.5 0 0 1 -1.5 -1.5v-6h7.5v7.5zM12 4.5v7.5H4.5V6a1.5 1.5 0 0 1 1.5 -1.5h6z" />
      </svg>
    </Icon>
  );
}
