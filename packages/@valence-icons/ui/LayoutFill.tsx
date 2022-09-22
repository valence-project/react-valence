import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _LayoutFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M24 31.5V15h7.5v15a1.5 1.5 0 0 1 -1.5 1.5h-6zm-3 0H6a1.5 1.5 0 0 1 -1.5 -1.5V15h16.5v16.5zm10.5 -19.5H4.5V6a1.5 1.5 0 0 1 1.5 -1.5h24a1.5 1.5 0 0 1 1.5 1.5v6z" />
      </svg>
    </Icon>
  );
}
