import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _PrinterLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M9 28.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V12a1.5 1.5 0 0 1 1.5 -1.5h4.5V4.5a1.5 1.5 0 0 1 1.5 -1.5h15a1.5 1.5 0 0 1 1.5 1.5v6h4.5a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1 -1.5 1.5h-4.5v3a1.5 1.5 0 0 1 -1.5 1.5H10.5a1.5 1.5 0 0 1 -1.5 -1.5v-3zm0 -3v-1.5a1.5 1.5 0 0 1 1.5 -1.5h15a1.5 1.5 0 0 1 1.5 1.5v1.5h3V13.5H6v12h3zM12 6v4.5h12V6H12zm0 19.5v4.5h12v-4.5H12zm-4.5 -10.5h4.5v3H7.5v-3z" />
      </svg>
    </Icon>
  );
}
