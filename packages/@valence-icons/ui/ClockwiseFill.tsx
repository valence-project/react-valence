import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ClockwiseFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30 15h4.5l-6 7.5 -6 -7.5h4.5V12a4.5 4.5 0 0 0 -4.5 -4.5h-6V4.5h6a7.5 7.5 0 0 1 7.5 7.5v3zm-10.5 -1.5a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V15a1.5 1.5 0 0 1 1.5 -1.5h15z" />
      </svg>
    </Icon>
  );
}
