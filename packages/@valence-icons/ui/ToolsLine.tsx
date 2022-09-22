import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ToolsLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M7.995 4.906a5.25 5.25 0 0 1 6.381 7.444l16.063 16.065 -2.121 2.121 -16.065 -16.065a5.253 5.253 0 0 1 -7.443 -6.383L8.166 11.445a2.25 2.25 0 1 0 3.181 -3.181L7.993 4.905zm15.551 2.826l4.773 -2.652 2.121 2.121 -2.652 4.773 -2.652 0.531 -3.18 3.181 -2.123 -2.121 3.181 -3.181 0.531 -2.652zm-10.077 12.198l2.121 2.121 -7.954 7.954a1.5 1.5 0 0 1 -2.238 -1.99l0.117 -0.131 7.954 -7.954z" />
      </svg>
    </Icon>
  );
}
