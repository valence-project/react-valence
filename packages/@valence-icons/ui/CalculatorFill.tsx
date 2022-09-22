import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CalculatorFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6 3h24a1.5 1.5 0 0 1 1.5 1.5v27a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V4.5a1.5 1.5 0 0 1 1.5 -1.5zm4.5 15v3h3v-3H10.5zm0 6v3h3v-3H10.5zm6 -6v3h3v-3h-3zm0 6v3h3v-3h-3zm6 -6v9h3v-9h-3zM10.5 9v6h15V9H10.5z" />
      </svg>
    </Icon>
  );
}
