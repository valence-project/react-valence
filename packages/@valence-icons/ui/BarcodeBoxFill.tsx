import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _BarcodeBoxFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm4.5 6v15h4.5V10.5H9zm6 0v15h3V10.5h-3zm4.5 0v15h1.5V10.5h-1.5zm3 0v15h4.5V10.5h-4.5z" />
      </svg>
    </Icon>
  );
}
