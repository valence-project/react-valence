import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _BarcodeBoxLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6 7.5v21h24V7.5H6zM4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm4.5 6h4.5v15H9V10.5zm6 0h3v15h-3V10.5zm4.5 0h1.5v15h-1.5V10.5zm3 0h4.5v15h-4.5V10.5z" />
      </svg>
    </Icon>
  );
}
