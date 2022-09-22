import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CalendarFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M3 16.5h30v13.5a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5v-13.5zm22.5 -12h6a1.5 1.5 0 0 1 1.5 1.5v7.5H3V6a1.5 1.5 0 0 1 1.5 -1.5h6V1.5h3v3h9V1.5h3v3z" />
      </svg>
    </Icon>
  );
}
