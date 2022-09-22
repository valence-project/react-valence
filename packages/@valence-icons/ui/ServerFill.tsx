import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ServerFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6 4.5h24a1.5 1.5 0 0 1 1.5 1.5v10.5H4.5V6a1.5 1.5 0 0 1 1.5 -1.5zM4.5 19.5h27v10.5a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5v-10.5zm6 4.5v3h4.5v-3H10.5zM10.5 9v3h4.5V9H10.5z" />
      </svg>
    </Icon>
  );
}
