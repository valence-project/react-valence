import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CopyrightLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 3c8.28 0 15 6.72 15 15s-6.72 15 -15 15S3 26.28 3 18 9.72 3 18 3zm0 3c-6.63 0 -12 5.37 -12 12s5.37 12 12 12 12 -5.37 12 -12 -5.37 -12 -12 -12zm0 4.5c2.73 0 5.119 1.46 6.432 3.642l-2.571 1.543A4.5 4.5 0 1 0 18 22.5a4.497 4.497 0 0 0 3.859 -2.184l2.573 1.542A7.498 7.498 0 0 1 10.5 18c0 -4.14 3.36 -7.5 7.5 -7.5z" />
      </svg>
    </Icon>
  );
}
