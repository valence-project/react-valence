import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _AuctionLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M21 30v3H3v-3h18zM21.879 1.029l11.667 11.667L31.425 14.82l-1.59 -0.531L26.12 18l8.486 8.486 -2.121 2.121L24 20.121l-3.606 3.606 0.424 1.698 -2.123 2.121 -11.667 -11.667 2.123 -2.121 1.695 0.423 9.441 -9.44 -0.529 -1.59L21.879 1.029zm1.06 5.304l-10.607 10.605 5.303 5.304 10.607 -10.605 -5.303 -5.304z" />
      </svg>
    </Icon>
  );
}
