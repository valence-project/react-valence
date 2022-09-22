import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ArrowGoForwardFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M24 10.5h-7.5a9 9 0 1 0 0 18h13.5v3h-13.5a12 12 0 1 1 0 -24h7.5V1.5l9 7.5 -9 7.5V10.5z" />
      </svg>
    </Icon>
  );
}
