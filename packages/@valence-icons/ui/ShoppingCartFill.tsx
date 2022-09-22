import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ShoppingCartFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M9 13.5h20.907l0.75 -3H12V7.5h20.58a1.5 1.5 0 0 1 1.455 1.865l-3.75 15a1.5 1.5 0 0 1 -1.455 1.135H7.5a1.5 1.5 0 0 1 -1.5 -1.5V6H3V3h4.5a1.5 1.5 0 0 1 1.5 1.5v9zm0 21a3 3 0 1 1 0 -6 3 3 0 0 1 0 6zm18 0a3 3 0 1 1 0 -6 3 3 0 0 1 0 6z" />
      </svg>
    </Icon>
  );
}
