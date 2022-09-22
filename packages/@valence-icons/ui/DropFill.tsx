import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _DropFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M8.454 9.954L18 0.408l9.546 9.546a13.5 13.5 0 1 1 -19.092 0z" />
      </svg>
    </Icon>
  );
}
