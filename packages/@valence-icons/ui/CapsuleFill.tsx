import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CapsuleFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M29.667 6.333c3.514 3.514 3.514 9.213 0 12.727l-3.183 3.18 -7.423 7.426c-3.514 3.514 -9.213 3.514 -12.727 0 -3.514 -3.514 -3.514 -9.213 0 -12.727l10.605 -10.607c3.516 -3.514 9.214 -3.514 12.729 0zm-7.425 15.909L13.758 13.758l-5.304 5.303c-2.343 2.343 -2.343 6.143 0 8.486 2.343 2.343 6.143 2.343 8.486 0l5.303 -5.304z" />
      </svg>
    </Icon>
  );
}
