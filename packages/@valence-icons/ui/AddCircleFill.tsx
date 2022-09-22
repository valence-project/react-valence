import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _AddCircleFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 33C9.716 33 3 26.285 3 18S9.716 3 18 3s15 6.716 15 15 -6.716 15 -15 15zm-1.5 -16.5H10.5v3h6v6h3v-6h6v-3h-6V10.5h-3v6z" />
      </svg>
    </Icon>
  );
}
