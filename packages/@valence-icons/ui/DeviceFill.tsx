import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _DeviceFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M28.5 9h-12a1.5 1.5 0 0 0 -1.5 1.5v19.5H6a1.5 1.5 0 0 1 -1.5 -1.5V4.5a1.5 1.5 0 0 1 1.5 -1.5h21a1.5 1.5 0 0 1 1.5 1.5v4.5zm-9 3h12a1.5 1.5 0 0 1 1.5 1.5v18a1.5 1.5 0 0 1 -1.5 1.5h-12a1.5 1.5 0 0 1 -1.5 -1.5V13.5a1.5 1.5 0 0 1 1.5 -1.5z" />
      </svg>
    </Icon>
  );
}
