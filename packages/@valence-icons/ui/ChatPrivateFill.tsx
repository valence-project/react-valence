import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ChatPrivateFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 3c8.284 0 15 6.716 15 15s-6.716 15 -15 15c-2.553 0 -4.958 -0.637 -7.062 -1.763L3 33l1.764 -7.935C3.639 22.959 3 20.554 3 18 3 9.716 9.716 3 18 3zm0 7.5c-2.397 0 -4.5 2.01 -4.5 4.5v1.5H12v7.5h12v-7.5h-1.5v-1.5c0 -2.486 -2.014 -4.5 -4.5 -4.5zm3 9v1.5h-6v-1.5h6zm-3 -6c0.714 0 1.5 0.735 1.5 1.5v1.5h-3v-1.5c0 -0.765 0.73 -1.5 1.5 -1.5z" />
      </svg>
    </Icon>
  );
}
