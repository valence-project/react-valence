import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _PlantLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M9 3c4.035 0 7.536 2.276 9.296 5.612C20.061 6.125 22.965 4.5 26.25 4.5H31.5v3.75c0 5.385 -4.365 9.75 -9.75 9.75H19.5v1.5h7.5v10.5c0 1.657 -1.343 3 -3 3H12c-1.657 0 -3 -1.343 -3 -3v-10.5h7.5v-3H13.5c-5.799 0 -10.5 -4.701 -10.5 -10.5V3h6zm15 19.5H12v7.5h12v-7.5zm4.5 -15h-2.25C22.523 7.5 19.5 10.522 19.5 14.25v0.75h2.25c3.728 0 6.75 -3.022 6.75 -6.75V7.5zM9 6H6c0 4.142 3.358 7.5 7.5 7.5h3c0 -4.142 -3.358 -7.5 -7.5 -7.5z" />
      </svg>
    </Icon>
  );
}
