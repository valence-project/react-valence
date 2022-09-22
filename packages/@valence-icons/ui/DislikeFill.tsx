import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _DislikeFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.212 2.09l27.576 27.578 -2.121 2.121 -5.62 -5.62L18 32.227 5.28 19.489c-3.06 -3.426 -3.042 -8.63 0.051 -12.034L2.09 4.212l2.123 -2.123zm26.152 5.046c3.393 3.402 3.51 8.82 0.354 12.354l-2.453 2.454L10.89 4.569c2.505 -0.31 5.112 0.432 7.111 2.224 3.524 -3.163 8.969 -3.059 12.363 0.342z" />
      </svg>
    </Icon>
  );
}
