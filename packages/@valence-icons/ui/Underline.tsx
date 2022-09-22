import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _Underline(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M12 4.5v13.5a6 6 0 1 0 12 0V4.5h3v13.5a9 9 0 1 1 -18 0V4.5h3zM6 30h24v3H6v-3z" />
      </svg>
    </Icon>
  );
}
