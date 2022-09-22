import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ProjectorLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm12.189 13.5H6v10.5h24v-10.5h-1.689a6.003 6.003 0 0 1 -11.622 0zm0 -3a6.003 6.003 0 0 1 11.622 0H30V7.5H6v7.5h10.689zM22.5 19.5a3 3 0 1 0 0 -6 3 3 0 0 0 0 6zm-13.5 3h3v3H9v-3z" />
      </svg>
    </Icon>
  );
}
