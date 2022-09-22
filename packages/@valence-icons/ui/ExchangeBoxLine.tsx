import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ExchangeBoxLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6 7.5v21h24V7.5H6zM4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm13.5 9V9l7.5 7.5H12V13.5h6zm-7.5 6h13.5v3h-6v4.5l-7.5 -7.5z" />
      </svg>
    </Icon>
  );
}
