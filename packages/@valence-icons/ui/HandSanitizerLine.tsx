import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _HandSanitizerLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M25.5 3v3l-6 -0.002V9h4.5v3c3.315 0 6 2.685 6 6v12c0 1.657 -1.343 3 -3 3H9c-1.657 0 -3 -1.343 -3 -3v-12c0 -3.315 2.685 -6 6 -6V9h4.5V5.998L11.25 6c-0.945 0 -2.055 0.735 -3.3 2.4L5.55 6.6C7.305 4.26 9.195 3 11.25 3H25.5zm-1.5 12H12c-1.657 0 -3 1.343 -3 3v12h18v-12c0 -1.657 -1.343 -3 -3 -3zm-4.5 3v3h3v3h-3.002L19.5 27h-3l-0.002 -3H13.5v-3h3v-3h3z" />
      </svg>
    </Icon>
  );
}
