import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CalculatorLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6 3h24a1.5 1.5 0 0 1 1.5 1.5v27a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V4.5a1.5 1.5 0 0 1 1.5 -1.5zm1.5 3v24h21V6H7.5zm3 3h15v6H10.5V9zm0 9h3v3H10.5v-3zm0 6h3v3H10.5v-3zm6 -6h3v3h-3v-3zm0 6h3v3h-3v-3zm6 -6h3v9h-3v-9z" />
      </svg>
    </Icon>
  );
}
