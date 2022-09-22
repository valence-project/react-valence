import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _HazeLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M9.125 19.5a9 9 0 1 1 17.751 0h-3.065a6 6 0 1 0 -11.622 0H9.125zM3 22.5h15v3H3v-3zm18 0h12v3h-12v-3zm3 6h6v3h-6v-3zM6 28.5h15v3H6v-3zm10.5 -27h3v4.5h-3V1.5zM5.272 7.394l2.121 -2.121L10.575 8.454 8.454 10.575 5.272 7.395zM28.605 5.272l2.121 2.121 -3.181 3.181 -2.121 -2.121 3.181 -3.181zM34.5 16.5v3h-4.5v-3h4.5zM6 16.5v3H1.5v-3h4.5z" />
      </svg>
    </Icon>
  );
}
