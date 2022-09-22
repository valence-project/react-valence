import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ReplyAllLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M21 6.75V13.5c8.284 0 15 6.716 15 15 0 0.41 -0.015 0.815 -0.048 1.215 -2.195 -4.161 -6.495 -7.037 -11.482 -7.207L24 22.5h-3v6.75L9 18l12 -11.25zm-9 0v4.106L4.38 18l7.618 7.142L12 29.25 0 18l12 -11.25zm6 6.924L13.386 18 18 22.325V19.5h6.051l0.52 0.011c1.927 0.065 3.786 0.465 5.514 1.149C27.885 18.112 24.63 16.5 21 16.5h-3V13.674z" />
      </svg>
    </Icon>
  );
}
