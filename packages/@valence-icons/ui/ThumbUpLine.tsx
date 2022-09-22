import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ThumbUpLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M21.9 12H31.5a3 3 0 0 1 3 3v3.156a3 3 0 0 1 -0.225 1.143l-4.643 11.272a1.5 1.5 0 0 1 -1.388 0.928H3a1.5 1.5 0 0 1 -1.5 -1.5V15a1.5 1.5 0 0 1 1.5 -1.5h5.223a1.5 1.5 0 0 0 1.225 -0.634L17.628 1.275a0.75 0.75 0 0 1 0.948 -0.238l2.721 1.361a3.75 3.75 0 0 1 1.958 4.28L21.9 12zM10.5 15.882V28.5h16.74L31.5 18.156V15h-9.6a3 3 0 0 1 -2.907 -3.739l1.355 -5.322a0.75 0.75 0 0 0 -0.392 -0.856l-0.992 -0.495 -7.065 10.008c-0.375 0.531 -0.855 0.966 -1.4 1.287zM7.5 16.5H4.5v12h3v-12z" />
      </svg>
    </Icon>
  );
}
