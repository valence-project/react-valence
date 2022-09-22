import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CapsuleLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M29.667 6.333c3.514 3.514 3.514 9.213 0 12.727l-10.605 10.607c-3.516 3.514 -9.214 3.514 -12.729 0 -3.514 -3.514 -3.514 -9.213 0 -12.727l10.605 -10.607c3.516 -3.514 9.214 -3.514 12.729 0zm-8.484 16.97L12.697 14.817l-4.244 4.245c-2.343 2.341 -2.343 6.141 0 8.484 2.343 2.343 6.143 2.343 8.486 0l4.244 -4.245zm6.363 -14.848c-2.343 -2.343 -6.143 -2.343 -8.486 0L14.82 12.696l8.486 8.486 4.242 -4.242c2.343 -2.343 2.343 -6.143 0 -8.486z" />
      </svg>
    </Icon>
  );
}
