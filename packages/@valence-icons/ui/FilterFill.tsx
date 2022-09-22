import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FilterFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M31.5 6L31.5 9 30 9 21 22.5 21 33 15 33 15 22.5 6 9 4.5 9 4.5 6z" />
      </svg>
    </Icon>
  );
}
