import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _SdCardMiniLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M12 6v8.69a3.75 3.75 0 0 1 -1.095 2.647L9 19.25V30h18V6H12zM10.5 3h18a1.5 1.5 0 0 1 1.5 1.5v27a1.5 1.5 0 0 1 -1.5 1.5H7.5a1.5 1.5 0 0 1 -1.5 -1.5v-12.87a1.5 1.5 0 0 1 0.438 -1.059l2.343 -2.352A0.75 0.75 0 0 0 9 14.689V4.5a1.5 1.5 0 0 1 1.5 -1.5zm12 4.5h3v6h-3V7.5zm-4.5 0h3v6h-3V7.5zM13.5 7.5h3v6H13.5V7.5z" />
      </svg>
    </Icon>
  );
}
