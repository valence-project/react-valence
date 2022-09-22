import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _DeleteRow(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30 7.5c0.828 0 1.5 0.672 1.5 1.5v9c0 0.828 -0.672 1.5 -1.5 1.5 0.942 1.252 1.5 2.811 1.5 4.5 0 4.142 -3.358 7.5 -7.5 7.5s-7.5 -3.358 -7.5 -7.5c0 -1.689 0.558 -3.248 1.5 -4.5H6c-0.828 0 -1.5 -0.672 -1.5 -1.5V9c0 -0.828 0.672 -1.5 1.5 -1.5h24zm-10.5 15v3h9v-3h-9zm9 -12H7.5v6h21V10.5z" />
      </svg>
    </Icon>
  );
}
