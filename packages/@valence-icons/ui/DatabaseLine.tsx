import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _DatabaseLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M16.5 28.5V13.5H6v15h10.5zm0 -18V6a1.5 1.5 0 0 1 1.5 -1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V12a1.5 1.5 0 0 1 1.5 -1.5h12zm3 -3v21h10.5V7.5h-10.5zM7.5 24h7.5v3H7.5v-3zm13.5 0h7.5v3h-7.5v-3zm0 -4.5h7.5v3h-7.5v-3zm0 -4.5h7.5v3h-7.5v-3zm-13.5 4.5h7.5v3H7.5v-3z" />
      </svg>
    </Icon>
  );
}
