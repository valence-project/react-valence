import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ClipboardLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M10.5 6V3h15v3h4.511c0.822 0 1.49 0.667 1.49 1.49v24.021a1.491 1.491 0 0 1 -1.49 1.49H5.989A1.491 1.491 0 0 1 4.5 31.511V7.49C4.5 6.668 5.167 6 5.989 6H10.5zm0 3H7.5v21h21V9h-3v3H10.5V9zm3 -3v3h9V6H13.5z" />
      </svg>
    </Icon>
  );
}
