import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _PaletteLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 3c8.283 0 15 5.967 15 13.333a8.337 8.337 0 0 1 -8.334 8.332h-2.949c-1.383 0 -2.501 1.117 -2.501 2.501 0 0.633 0.251 1.217 0.633 1.65 0.401 0.45 0.651 1.033 0.651 1.683C20.5 31.884 19.35 33 18 33 9.717 33 3 26.283 3 18S9.717 3 18 3zm-1.784 24.166a5.496 5.496 0 0 1 5.5 -5.5h2.949A5.337 5.337 0 0 0 30 16.335C30 10.709 24.702 6 18 6a12 12 0 0 0 -1.014 23.958 5.472 5.472 0 0 1 -0.77 -2.79zM11.25 18a2.25 2.25 0 1 1 0 -4.5 2.25 2.25 0 0 1 0 4.5zm13.5 0a2.25 2.25 0 1 1 0 -4.5 2.25 2.25 0 0 1 0 4.5zM18 13.5a2.25 2.25 0 1 1 0 -4.5 2.25 2.25 0 0 1 0 4.5z" />
      </svg>
    </Icon>
  );
}
