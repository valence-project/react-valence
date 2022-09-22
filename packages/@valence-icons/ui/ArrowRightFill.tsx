import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ArrowRightFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 19.5H6v-3h12V6l12 12 -12 12z" />
      </svg>
    </Icon>
  );
}
