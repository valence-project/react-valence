import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CopperDiamondLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 33C9.716 33 3 26.285 3 18S9.716 3 18 3s15 6.716 15 15 -6.716 15 -15 15zm0 -3a12 12 0 1 0 0 -24 12 12 0 0 0 0 24zM13.5 12h9l3.75 5.25L18 25.5l-8.25 -8.25L13.5 12zm1.545 3l-1.38 1.935L18 21.27l4.335 -4.335 -1.38 -1.935h-5.91z" />
      </svg>
    </Icon>
  );
}
