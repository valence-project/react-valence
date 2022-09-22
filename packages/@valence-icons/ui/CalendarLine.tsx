import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CalendarLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M25.5 4.5h6a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5h6V1.5h3v3h9V1.5h3v3zm-3 3H13.5v3H10.5V7.5H6v6h24V7.5h-4.5v3h-3V7.5zm7.5 9H6v12h24v-12z" />
      </svg>
    </Icon>
  );
}
