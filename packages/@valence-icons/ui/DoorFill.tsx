import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _DoorFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M27 4.5c0.828 0 1.5 0.672 1.5 1.5v24c0 0.828 -0.672 1.5 -1.5 1.5H9c-0.828 0 -1.5 -0.672 -1.5 -1.5V6c0 -0.828 0.672 -1.5 1.5 -1.5h18zm-6 12c-0.828 0 -1.5 0.672 -1.5 1.5s0.672 1.5 1.5 1.5 1.5 -0.672 1.5 -1.5 -0.672 -1.5 -1.5 -1.5z" />
      </svg>
    </Icon>
  );
}
