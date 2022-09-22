import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _HammerLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30 3a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1 -1.5 1.5h-7.5v19.5a1.5 1.5 0 0 1 -1.5 1.5h-6a1.5 1.5 0 0 1 -1.5 -1.5V13.5H5.25a1.5 1.5 0 0 1 -1.5 -1.5V8.427a1.5 1.5 0 0 1 0.83 -1.341L12.75 3H30zm-7.5 3H13.458L6.75 9.354V10.5H16.5v21h3V10.5h3V6zm6 0h-3v4.5h3V6z" />
      </svg>
    </Icon>
  );
}
