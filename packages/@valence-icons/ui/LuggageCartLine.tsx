import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _LuggageCartLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M8.25 30c1.242 0 2.25 1.008 2.25 2.25S9.492 34.5 8.25 34.5 6 33.492 6 32.25 7.008 30 8.25 30zm19.5 0c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25 -2.25 2.25 -2.25 -1.008 -2.25 -2.25 1.008 -2.25 2.25 -2.25zM3.258 2.635l5.74 5.742V25.5L30 25.5v3H7.5c-0.828 0 -1.5 -0.672 -1.5 -1.5V9.62L1.134 4.758l2.123 -2.123zM24 4.5c0.828 0 1.5 0.672 1.5 1.5v3h4.489C30.825 9 31.5 9.684 31.5 10.492v12.015c0 0.825 -0.675 1.492 -1.51 1.492H12.011C11.175 24 10.5 23.316 10.5 22.508v-12.015C10.5 9.668 11.175 9 12.011 9h4.488L16.5 6c0 -0.828 0.672 -1.5 1.5 -1.5h6zm-9 7.5H13.5v9h1.5V12zm9 0h-6v9h6V12zm4.5 0h-1.5v9h1.5V12zm-6 -4.5h-3v1.5h3V7.5z" />
      </svg>
    </Icon>
  );
}
