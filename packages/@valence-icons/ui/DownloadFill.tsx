import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _DownloadFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 28.5h27v3H4.5v-3zM19.5 13.5h10.5l-12 12 -12 -12h10.5V1.5h3v12z" />
      </svg>
    </Icon>
  );
}
