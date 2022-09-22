import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _RulerFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M7.394 19.811l3.181 3.181 2.121 -2.121 -3.18 -3.181 3.18 -3.181 4.244 4.242 2.121 -2.121L14.82 12.386 18 9.204l3.181 3.181 2.123 -2.121 -3.183 -3.181 4.244 -4.244a1.5 1.5 0 0 1 2.121 0l7.425 7.425a1.5 1.5 0 0 1 0 2.121l-22.275 22.275a1.5 1.5 0 0 1 -2.121 0l-7.425 -7.425a1.5 1.5 0 0 1 0 -2.121l5.304 -5.304z" />
      </svg>
    </Icon>
  );
}
