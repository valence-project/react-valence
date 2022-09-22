import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _PlugFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M19.5 27v3h9v3h-9a3 3 0 0 1 -3 -3v-3H12a6 6 0 0 1 -6 -6v-6h24v6a6 6 0 0 1 -6 6h-4.5zm4.5 -18h4.5a1.5 1.5 0 0 1 1.5 1.5v3H6V10.5a1.5 1.5 0 0 1 1.5 -1.5h4.5V3h3v6h6V3h3v6zm-6 12.75a1.5 1.5 0 1 0 0 -3 1.5 1.5 0 0 0 0 3z" />
      </svg>
    </Icon>
  );
}
