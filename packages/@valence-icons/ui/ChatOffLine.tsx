import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ChatOffLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.212 2.09l29.698 29.7 -2.123 2.121 -5.412 -5.412L9.683 28.5 3 33.75V6c0 -0.255 0.063 -0.494 0.174 -0.704l-1.085 -1.085 2.123 -2.123zm1.787 6.03L6 27.578 8.645 25.5h14.732L6 8.118zM31.5 4.5a1.5 1.5 0 0 1 1.5 1.5v20.678l-3 -3V7.5L13.819 7.498 10.821 4.5H31.5z" />
      </svg>
    </Icon>
  );
}
