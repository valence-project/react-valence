import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _GroupFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M3 33a12 12 0 1 1 24 0H3zm12 -13.5c-4.973 0 -9 -4.027 -9 -9s4.027 -9 9 -9 9 4.027 9 9 -4.027 9 -9 9zm11.045 3.349A11.258 11.258 0 0 1 34.474 33H30c0 -3.915 -1.5 -7.479 -3.955 -10.151zm-3.035 -3.414A11.97 11.97 0 0 0 27 10.5a11.946 11.946 0 0 0 -1.522 -5.854A7.5 7.5 0 0 1 31.5 12a7.498 7.498 0 0 1 -8.49 7.435z" />
      </svg>
    </Icon>
  );
}
