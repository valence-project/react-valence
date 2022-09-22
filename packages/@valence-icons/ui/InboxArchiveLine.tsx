import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _InboxArchiveLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6 4.5h24l3 6v19.5a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V10.506L6 4.5zm24 9H6v15h24V13.5zm-0.354 -3l-1.5 -3H7.856l-1.5 3h23.29zM19.5 21h4.5l-6 6 -6 -6h4.5v-6h3v6z" />
      </svg>
    </Icon>
  );
}
