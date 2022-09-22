import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _DrizzleFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M16.5 27v4.5H13.5v-4.5a12 12 0 1 1 11.187 -16.352A8.25 8.25 0 1 1 26.25 27H16.5zm3 3h3v4.5h-3v-4.5z" />
      </svg>
    </Icon>
  );
}
