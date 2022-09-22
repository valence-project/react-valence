import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _BriefcaseLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M10.5 7.5V3a1.5 1.5 0 0 1 1.5 -1.5h12a1.5 1.5 0 0 1 1.5 1.5v4.5h6a1.5 1.5 0 0 1 1.5 1.5v21a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V9a1.5 1.5 0 0 1 1.5 -1.5h6zM6 24v4.5h24v-4.5H6zm0 -3h24V10.5H6v10.5zM13.5 4.5v3h9V4.5H13.5zm3 12h3v3h-3v-3z" />
      </svg>
    </Icon>
  );
}
