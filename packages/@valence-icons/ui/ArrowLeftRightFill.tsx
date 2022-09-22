import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ArrowLeftRightFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M24 24v-6l7.5 7.5 -7.5 7.5v-6H6v-3h18zM12 3v5.998L30 9v3H12v6L4.5 10.5l7.5 -7.5z" />
      </svg>
    </Icon>
  );
}
