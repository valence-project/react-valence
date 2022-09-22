import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _StackLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30.124 22.8l1.803 1.081a0.75 0.75 0 0 1 0 1.287l-13.155 7.893a1.5 1.5 0 0 1 -1.545 0l-13.155 -7.893a0.75 0.75 0 0 1 0 -1.287l1.803 -1.081L18 30.075l12.125 -7.275zm0 -7.05l1.803 1.081a0.75 0.75 0 0 1 0 1.287L18 26.475l-13.928 -8.357a0.75 0.75 0 0 1 0 -1.287l1.803 -1.081L18 23.025l12.125 -7.275zm-11.354 -13.787l13.157 7.893a0.75 0.75 0 0 1 0 1.287L18 19.5 4.072 11.143a0.75 0.75 0 0 1 0 -1.287l13.155 -7.893a1.5 1.5 0 0 1 1.545 0zM18 4.998L8.83 10.5 18 16.002 27.169 10.5 18 4.998z" />
      </svg>
    </Icon>
  );
}
