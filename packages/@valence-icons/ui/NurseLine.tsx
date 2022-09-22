import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _NurseLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 22.5c6.12 0 11.169 4.581 11.907 10.5H6.093c0.738 -5.919 5.787 -10.5 11.907 -10.5zm-2.72 3.42C13.13 26.601 11.319 28.07 10.2 30H18l-2.72 -4.08zm5.441 0L18 30h7.798c-1.117 -1.93 -2.928 -3.399 -5.077 -4.08zM27 3v9c0 4.971 -4.029 9 -9 9s-9 -4.029 -9 -9V3h18zM12 12c0 3.315 2.685 6 6 6s6 -2.685 6 -6H12zm12 -6H12v3h12V6z" />
      </svg>
    </Icon>
  );
}
