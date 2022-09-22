import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FlashlightFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M19.5 15h10.5l-13.5 19.5v-13.5H6l13.5 -19.5z" />
      </svg>
    </Icon>
  );
}
