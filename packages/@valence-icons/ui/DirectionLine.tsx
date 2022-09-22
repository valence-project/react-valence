import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _DirectionLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 5.272L5.272 18 18 30.727 30.727 18 18 5.272zm1.06 -3.183l14.85 14.85a1.5 1.5 0 0 1 0 2.121l-14.85 14.85a1.5 1.5 0 0 1 -2.121 0l-14.85 -14.85a1.5 1.5 0 0 1 0 -2.121l14.85 -14.85a1.5 1.5 0 0 1 2.121 0zM19.5 15V11.25l5.25 5.25 -5.25 5.25V18h-4.5v4.5H12v-6a1.5 1.5 0 0 1 1.5 -1.5h6z" />
      </svg>
    </Icon>
  );
}
