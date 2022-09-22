import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _PhoneCameraLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M22.205 6a8.94 8.94 0 0 0 -1.08 3H4.5v18h27v-7.625a8.94 8.94 0 0 0 3 -1.08V28.5c0 0.83 -0.66 1.501 -1.503 1.501H3.003A1.5 1.5 0 0 1 1.5 28.5V7.5c0 -0.828 0.66 -1.5 1.503 -1.5h19.2zM30 13.5a3 3 0 1 0 0 -6 3 3 0 0 0 0 6zm0 3a6 6 0 1 1 0 -12 6 6 0 0 1 0 12zm-3 3h3v4.5h-3v-4.5z" />
      </svg>
    </Icon>
  );
}
