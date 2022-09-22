import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _DeleteColumn(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 4.5c0.828 0 1.5 0.672 1.5 1.5v12c1.252 -0.942 2.811 -1.5 4.5 -1.5 4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5 -7.5 7.5c-1.548 0 -2.985 -0.47 -4.181 -1.272L19.5 30c0 0.828 -0.672 1.5 -1.5 1.5H9c-0.828 0 -1.5 -0.672 -1.5 -1.5V6c0 -0.828 0.672 -1.5 1.5 -1.5h9zm-1.5 3H10.5v21h6V7.5zm12 15h-9v3h9v-3z" />
      </svg>
    </Icon>
  );
}
