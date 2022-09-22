import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _UploadFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 28.5h27v3H4.5v-3zm15 -13.5v12h-3v-12H6l12 -12 12 12h-10.5z" />
      </svg>
    </Icon>
  );
}
