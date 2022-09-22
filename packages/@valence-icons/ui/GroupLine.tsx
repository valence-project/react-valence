import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _GroupLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M3 33a12 12 0 1 1 24 0h-3a9 9 0 1 0 -18 0H3zm12 -13.5c-4.973 0 -9 -4.027 -9 -9s4.027 -9 9 -9 9 4.027 9 9 -4.027 9 -9 9zm0 -3c3.315 0 6 -2.685 6 -6s-2.685 -6 -6 -6 -6 2.685 -6 6 2.685 6 6 6zm12.426 5.554A12.003 12.003 0 0 1 34.5 33h-3a9.002 9.002 0 0 0 -5.306 -8.21l1.23 -2.736zm-1.032 -16.935A8.25 8.25 0 0 1 31.5 12.75a8.248 8.248 0 0 1 -7.5 8.217v-3.019a5.25 5.25 0 0 0 1.561 -9.913l0.833 -2.915z" />
      </svg>
    </Icon>
  );
}
