import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CurrencyLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M25.5 24h3V6H13.5v3h12v15zm0 3v4.5c0 0.828 -0.675 1.5 -1.51 1.5H6.01A1.501 1.501 0 0 1 4.5 31.5l0.005 -21c0 -0.828 0.675 -1.5 1.51 -1.5H10.5V4.5a1.5 1.5 0 0 1 1.5 -1.5h18a1.5 1.5 0 0 1 1.5 1.5v21a1.5 1.5 0 0 1 -1.5 1.5h-4.5zM7.505 12L7.5 30h15V12H7.505zM10.5 24h6.75a0.75 0.75 0 1 0 0 -1.5h-4.5a3.75 3.75 0 1 1 0 -7.5H13.5V13.5h3v1.5h3v3H12.75a0.75 0.75 0 1 0 0 1.5h4.5a3.75 3.75 0 1 1 0 7.5H16.5v1.5H13.5v-1.5H10.5v-3z" />
      </svg>
    </Icon>
  );
}
