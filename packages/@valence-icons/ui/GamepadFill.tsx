import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _GamepadFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M25.5 6a9 9 0 0 1 9 9v6a9 9 0 0 1 -9 9H10.5a9 9 0 0 1 -9 -9v-6a9 9 0 0 1 9 -9h15zm-10.5 7.5H12v3H9v3h2.998L12 22.5h3l-0.002 -3H18v-3h-3V13.5zm12 6h-3v3h3v-3zm-3 -6h-3v3h3V13.5z" />
      </svg>
    </Icon>
  );
}
