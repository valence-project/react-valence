import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _TodoLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M25.5 3h4.5a1.5 1.5 0 0 1 1.5 1.5v27a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V4.5a1.5 1.5 0 0 1 1.5 -1.5h4.5V0h3v3h9V0h3v3zm0 3v3h-3V6H13.5v3H10.5V6H7.5v24h21V6h-3zM10.5 12h15v3H10.5V12zm0 6h15v3H10.5v-3z" />
      </svg>
    </Icon>
  );
}
