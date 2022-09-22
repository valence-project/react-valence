import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _BringToFront(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M16.5 4.5c0.828 0 1.5 0.672 1.5 1.5v3h7.5c0.828 0 1.5 0.672 1.5 1.5v7.5h3c0.828 0 1.5 0.672 1.5 1.5v10.5c0 0.828 -0.672 1.5 -1.5 1.5h-10.5c-0.828 0 -1.5 -0.672 -1.5 -1.5v-3H10.5c-0.828 0 -1.5 -0.672 -1.5 -1.5v-7.5H6c-0.828 0 -1.5 -0.672 -1.5 -1.5V6c0 -0.828 0.672 -1.5 1.5 -1.5h10.5zm7.5 7.5H12v12h12V12z" />
      </svg>
    </Icon>
  );
}
