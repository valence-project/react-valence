import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _IndeterminateCircleFill(
  props: IconPropsWithoutChildren
) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 33C9.716 33 3 26.285 3 18S9.716 3 18 3s15 6.716 15 15 -6.716 15 -15 15zM10.5 16.5v3h15v-3H10.5z" />
      </svg>
    </Icon>
  );
}
