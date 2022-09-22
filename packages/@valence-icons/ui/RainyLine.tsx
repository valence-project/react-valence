import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _RainyLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M24 27v-3h1.5a6 6 0 1 0 -3.236 -11.055A9 9 0 1 0 12 23.875v3.033A12.002 12.002 0 0 1 13.5 3a11.997 11.997 0 0 1 10.47 6.13A9 9 0 1 1 25.5 27h-1.5zm-8.652 1.098L18 25.446l2.652 2.652a3.75 3.75 0 1 1 -5.304 0z" />
      </svg>
    </Icon>
  );
}
