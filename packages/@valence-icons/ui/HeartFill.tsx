import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _HeartFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18.002 6.793c3.524 -3.163 8.969 -3.059 12.363 0.342 3.393 3.402 3.51 8.82 0.354 12.354l-12.72 12.738 -12.717 -12.738c-3.156 -3.534 -3.037 -8.961 0.354 -12.354 3.397 -3.396 8.832 -3.51 12.366 -0.342z" />
      </svg>
    </Icon>
  );
}
