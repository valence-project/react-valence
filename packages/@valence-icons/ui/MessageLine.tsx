import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _MessageLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M9.683 28.5L3 33.75V6a1.5 1.5 0 0 1 1.5 -1.5h27a1.5 1.5 0 0 1 1.5 1.5v21a1.5 1.5 0 0 1 -1.5 1.5H9.683zm-1.038 -3H30V7.5H6v20.078L8.645 25.5zM12 15h12v3H12v-3z" />
      </svg>
    </Icon>
  );
}
