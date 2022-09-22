import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _SpeakerLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M7.5 6v24h21V6H7.5zM6 3h24a1.5 1.5 0 0 1 1.5 1.5v27a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V4.5a1.5 1.5 0 0 1 1.5 -1.5zm12 22.5a3.75 3.75 0 1 0 0 -7.5 3.75 3.75 0 0 0 0 7.5zm0 3a6.75 6.75 0 1 1 0 -13.5 6.75 6.75 0 0 1 0 13.5zm0 -15.75a2.25 2.25 0 1 1 0 -4.5 2.25 2.25 0 0 1 0 4.5z" />
      </svg>
    </Icon>
  );
}
