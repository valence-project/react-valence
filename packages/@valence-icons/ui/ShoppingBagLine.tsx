import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ShoppingBagLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M10.5 12V9a7.5 7.5 0 1 1 15 0v3h4.5a1.5 1.5 0 0 1 1.5 1.5v18a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V13.5a1.5 1.5 0 0 1 1.5 -1.5h4.5zm0 3H7.5v15h21V15h-3v3h-3v-3H13.5v3H10.5v-3zm3 -3h9V9a4.5 4.5 0 0 0 -9 0v3z" />
      </svg>
    </Icon>
  );
}
