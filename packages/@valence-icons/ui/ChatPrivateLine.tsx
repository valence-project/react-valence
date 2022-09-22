import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ChatPrivateLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 3c8.284 0 15 6.716 15 15s-6.716 15 -15 15c-2.553 0 -4.958 -0.637 -7.062 -1.763L3 33l1.764 -7.935C3.639 22.959 3 20.554 3 18 3 9.716 9.716 3 18 3zm0 3c-6.627 0 -12 5.373 -12 12 0 2.002 0.489 3.927 1.41 5.649l0.525 0.981 -0.984 4.419 4.422 -0.981 0.98 0.523c1.722 0.921 3.645 1.408 5.647 1.408 6.627 0 12 -5.373 12 -12s-5.373 -12 -12 -12zm0 4.5c2.486 0 4.5 2.014 4.5 4.5v1.5h1.5v7.5H12v-7.5h1.5v-1.5c0 -2.486 2.014 -4.5 4.5 -4.5zm3 9h-6v1.5h6v-1.5zm-3 -6c-0.828 0 -1.5 0.675 -1.5 1.5v1.5h3v-1.5c0 -0.828 -0.672 -1.5 -1.5 -1.5z" />
      </svg>
    </Icon>
  );
}
