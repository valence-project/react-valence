import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CameraLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M14.742 7.5l-3 3H6v18h24V10.5h-5.742l-3 -3H14.742zM13.5 4.5h9l3 3h6a1.5 1.5 0 0 1 1.5 1.5v21a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V9a1.5 1.5 0 0 1 1.5 -1.5h6l3 -3zm4.5 22.5a8.25 8.25 0 1 1 0 -16.5 8.25 8.25 0 0 1 0 16.5zm0 -3a5.25 5.25 0 1 0 0 -10.5 5.25 5.25 0 0 0 0 10.5z" />
      </svg>
    </Icon>
  );
}
