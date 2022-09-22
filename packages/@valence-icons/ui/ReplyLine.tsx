import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ReplyLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M16.5 30L1.5 18l15 -12v7.5c8.284 0 15 6.716 15 15 0 0.41 -0.015 0.815 -0.048 1.215 -2.195 -4.161 -6.495 -7.037 -11.482 -7.207L19.5 22.5h-3v7.5zm-3 -10.5h6.051l0.52 0.011c1.927 0.065 3.786 0.465 5.514 1.149C23.385 18.112 20.13 16.5 16.5 16.5H13.5V12.241L6.303 18 13.5 23.759V19.5z" />
      </svg>
    </Icon>
  );
}
