import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _TornadoFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M3 4.5h30v3H3V4.5zm3 6h24v3H6V10.5zm6 6h21v3H12v-3zm3 6h12v3h-12v-3zm-3 6h9v3H12v-3z" />
      </svg>
    </Icon>
  );
}
