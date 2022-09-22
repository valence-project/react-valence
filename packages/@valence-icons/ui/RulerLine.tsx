import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _RulerLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M9.514 21.931L5.272 26.175l5.303 5.303L30.727 11.325 25.425 6.022l-3.183 3.181 2.123 2.121 -2.123 2.121 -2.121 -2.121 -3.181 3.183 3.181 3.18L18 19.812l-3.181 -3.181 -3.183 3.181 2.123 2.121 -2.123 2.123 -2.121 -2.123zM26.486 2.84l7.425 7.425a1.5 1.5 0 0 1 0 2.121l-22.275 22.275a1.5 1.5 0 0 1 -2.121 0l-7.425 -7.425a1.5 1.5 0 0 1 0 -2.121l22.275 -22.275a1.5 1.5 0 0 1 2.121 0z" />
      </svg>
    </Icon>
  );
}
