import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _HeartAddFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M28.5 21v4.5h4.5v3h-4.5v4.5h-3v-4.5h-4.5v-3h4.5v-4.5h3zm1.865 -13.864c3.24 3.249 3.494 8.335 0.76 11.865C29.889 18.36 28.485 18 27 18c-4.971 0 -9 4.029 -9 9 0 1.513 0.373 2.94 1.033 4.191l-1.035 1.036 -12.717 -12.738c-3.156 -3.534 -3.037 -8.961 0.354 -12.354 3.397 -3.396 8.832 -3.51 12.366 -0.342 3.524 -3.163 8.969 -3.059 12.363 0.342z" />
      </svg>
    </Icon>
  );
}
