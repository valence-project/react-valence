import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _TodoFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M25.5 3h4.5a1.5 1.5 0 0 1 1.5 1.5v27a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V4.5a1.5 1.5 0 0 1 1.5 -1.5h4.5V0h3v3h9V0h3v3zM10.5 12v3h15V12H10.5zm0 6v3h15v-3H10.5z" />
      </svg>
    </Icon>
  );
}
