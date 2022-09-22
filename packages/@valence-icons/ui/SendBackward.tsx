import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _SendBackward(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M21 4.5c0.828 0 1.5 0.672 1.5 1.5v7.5h7.5c0.828 0 1.5 0.672 1.5 1.5v15c0 0.828 -0.672 1.5 -1.5 1.5H15c-0.828 0 -1.5 -0.672 -1.5 -1.5v-7.5H6c-0.828 0 -1.5 -0.672 -1.5 -1.5V6c0 -0.828 0.672 -1.5 1.5 -1.5h15zm-1.5 3H7.5v12h6v-4.5c0 -0.828 0.672 -1.5 1.5 -1.5h4.5V7.5z" />
      </svg>
    </Icon>
  );
}
