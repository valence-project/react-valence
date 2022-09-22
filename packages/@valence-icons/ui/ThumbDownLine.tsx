import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ThumbDownLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M14.1 24H4.5a3 3 0 0 1 -3 -3v-3.156a3 3 0 0 1 0.225 -1.143L6.369 5.43A1.5 1.5 0 0 1 7.755 4.5H33a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1 -1.5 1.5h-5.223a1.5 1.5 0 0 0 -1.225 0.634l-8.18 11.589a0.75 0.75 0 0 1 -0.948 0.238L14.703 33.6a3.75 3.75 0 0 1 -1.958 -4.28L14.1 24zm11.4 -3.882V7.5H8.76L4.5 17.844V21h9.6a3 3 0 0 1 2.907 3.739l-1.355 5.322a0.75 0.75 0 0 0 0.392 0.856l0.992 0.495 7.065 -10.008c0.375 -0.531 0.855 -0.966 1.4 -1.287zM28.5 19.5h3V7.5h-3v12z" />
      </svg>
    </Icon>
  );
}
