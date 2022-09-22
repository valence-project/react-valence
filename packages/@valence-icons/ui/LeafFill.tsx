import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _LeafFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M31.5 4.5v3c0 14.441 -8.059 21 -18 21H10.647c0.318 -4.518 1.725 -7.252 5.397 -10.502 1.806 -1.597 1.653 -2.52 0.764 -1.99 -6.126 3.645 -9.168 8.571 -9.303 16.437L7.5 33H4.5c0 -2.045 0.174 -3.9 0.519 -5.598C4.674 25.461 4.5 22.827 4.5 19.5 4.5 11.216 11.216 4.5 19.5 4.5c3 0 6 1.5 12 0z" />
      </svg>
    </Icon>
  );
}
