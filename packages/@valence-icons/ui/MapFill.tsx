import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _MapFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M3 7.5l10.5 -4.5 9 4.5 9.454 -4.051a0.75 0.75 0 0 1 1.045 0.69V28.5l-10.5 4.5 -9 -4.5 -9.454 4.051a0.75 0.75 0 0 1 -1.045 -0.69V7.5z" />
      </svg>
    </Icon>
  );
}
