import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ArrowGoBackFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M12 10.5v6L3 9l9 -7.5v6h7.5a12 12 0 1 1 0 24H6v-3h13.5a9 9 0 1 0 0 -18H12z" />
      </svg>
    </Icon>
  );
}
