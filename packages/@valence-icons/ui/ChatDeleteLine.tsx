import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ChatDeleteLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M9.683 28.5L3 33.75V6a1.5 1.5 0 0 1 1.5 -1.5h27a1.5 1.5 0 0 1 1.5 1.5v21a1.5 1.5 0 0 1 -1.5 1.5H9.683zM6 27.578L8.645 25.5H30V7.5H6v20.078zM20.121 16.5l3.713 3.713 -2.121 2.121L18 18.621 14.288 22.335l-2.121 -2.121L15.879 16.5 12.165 12.788l2.121 -2.121L18 14.379l3.713 -3.713 2.121 2.121L20.121 16.5z" />
      </svg>
    </Icon>
  );
}
