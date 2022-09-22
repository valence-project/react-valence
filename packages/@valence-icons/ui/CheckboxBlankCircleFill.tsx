import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CheckboxBlankCircleFill(
  props: IconPropsWithoutChildren
) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M33 18A15 15 0 0 1 18 33A15 15 0 0 1 3 18A15 15 0 0 1 33 18z" />
      </svg>
    </Icon>
  );
}
