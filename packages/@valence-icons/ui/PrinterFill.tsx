import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _PrinterFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M10.5 25.5h15v7.5H10.5v-7.5zm18 4.5v-7.5H7.5v7.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V13.5a1.5 1.5 0 0 1 1.5 -1.5h27a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1 -1.5 1.5h-3zM7.5 15v3h4.5v-3H7.5zm3 -12h15a1.5 1.5 0 0 1 1.5 1.5v4.5H9V4.5a1.5 1.5 0 0 1 1.5 -1.5z" />
      </svg>
    </Icon>
  );
}
