import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _DirectionFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M13.5 15a1.5 1.5 0 0 0 -1.5 1.5v6h3v-4.5h4.5v3.75l5.25 -5.25L19.5 11.25V15H13.5zm5.56 -12.91l14.85 14.85a1.5 1.5 0 0 1 0 2.121l-14.85 14.85a1.5 1.5 0 0 1 -2.121 0l-14.85 -14.85a1.5 1.5 0 0 1 0 -2.121l14.85 -14.85a1.5 1.5 0 0 1 2.121 0z" />
      </svg>
    </Icon>
  );
}
