import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _KeyFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M25.5 21h-6.511a9 9 0 1 1 0 -6H34.5v6h-3v6h-6v-6zM10.5 21a3 3 0 1 0 0 -6 3 3 0 0 0 0 6z" />
      </svg>
    </Icon>
  );
}
