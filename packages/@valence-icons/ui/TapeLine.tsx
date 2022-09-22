import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _TapeLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M16.245 19.5h3.51A4.5 4.5 0 1 1 24 22.5H12a4.5 4.5 0 1 1 4.245 -3zM6 7.5v21h24V7.5H6zM4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm7.5 15a1.5 1.5 0 1 0 0 -3 1.5 1.5 0 0 0 0 3zm12 0a1.5 1.5 0 1 0 0 -3 1.5 1.5 0 0 0 0 3z" />
      </svg>
    </Icon>
  );
}
