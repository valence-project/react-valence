import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _RefundLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30 12V7.5H6v4.5h24zm0 3H6v13.5h24v-13.5zM4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm12 16.5h9v3H9.75l6.75 -6.75V21z" />
      </svg>
    </Icon>
  );
}
