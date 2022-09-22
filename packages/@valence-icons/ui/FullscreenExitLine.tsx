import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FullscreenExitLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M27 10.5h6v3h-9V4.5h3v6zM12 13.5H3V10.5h6V4.5h3v9zm15 12v6h-3v-9h9v3h-6zM12 22.5v9H9v-6H3v-3h9z" />
      </svg>
    </Icon>
  );
}
