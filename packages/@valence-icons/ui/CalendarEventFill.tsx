import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CalendarEventFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M25.5 4.5h6a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5h6V1.5h3v3h9V1.5h3v3zM6 13.5v15h24V13.5H6zm3 6h7.5v6H9v-6z" />
      </svg>
    </Icon>
  );
}
