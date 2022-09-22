import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CactusFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 3c3.315 0 6 2.685 6 6v13.5h1.5c0.825 0 1.5 -0.675 1.5 -1.5V12c0 -0.828 0.672 -1.5 1.5 -1.5s1.5 0.672 1.5 1.5v9c0 2.486 -2.014 4.5 -4.5 4.5h-1.5v4.5h3v3H9v-3h3v-9H10.5c-2.486 0 -4.5 -2.014 -4.5 -4.5V13.5c0 -0.828 0.672 -1.5 1.5 -1.5s1.5 0.672 1.5 1.5v3c0 0.825 0.675 1.5 1.5 1.5h1.5V9c0 -3.315 2.685 -6 6 -6z" />
      </svg>
    </Icon>
  );
}
