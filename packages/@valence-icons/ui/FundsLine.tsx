import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FundsLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6.609 21.785l5.103 -5.103 4.242 4.244 4.736 -4.736L18 13.5h7.5v7.5l-2.689 -2.689 -6.856 6.856 -4.242 -4.242 -3.713 3.711a12 12 0 1 0 -1.391 -2.85zm-2.307 2.337l-0.015 -0.015 0.006 -0.006A14.947 14.947 0 0 1 3 18C3 9.716 9.716 3 18 3s15 6.716 15 15 -6.716 15 -15 15c-6.105 0 -11.355 -3.645 -13.698 -8.878z" />
      </svg>
    </Icon>
  );
}
