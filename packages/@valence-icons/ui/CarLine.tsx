import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CarLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M28.5 30H7.5v1.5a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V16.5l3.72 -8.682A3 3 0 0 1 9.48 6H26.52a3 3 0 0 1 2.757 1.818L33 16.5v15a1.5 1.5 0 0 1 -1.5 1.5h-1.5a1.5 1.5 0 0 1 -1.5 -1.5v-1.5zm1.5 -10.5H6v7.5h24v-7.5zM6.264 16.5h23.472l-3.214 -7.5H9.48l-3.214 7.5zM9.75 25.5a2.25 2.25 0 1 1 0 -4.5 2.25 2.25 0 0 1 0 4.5zm16.5 0a2.25 2.25 0 1 1 0 -4.5 2.25 2.25 0 0 1 0 4.5z" />
      </svg>
    </Icon>
  );
}
