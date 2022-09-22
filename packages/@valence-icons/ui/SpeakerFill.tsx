import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _SpeakerFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6 3h24a1.5 1.5 0 0 1 1.5 1.5v27a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V4.5a1.5 1.5 0 0 1 1.5 -1.5zm12 27a7.5 7.5 0 1 0 0 -15 7.5 7.5 0 0 0 0 15zm0 -18a2.25 2.25 0 1 0 0 -4.5 2.25 2.25 0 0 0 0 4.5zm0 15a4.5 4.5 0 1 1 0 -9 4.5 4.5 0 0 1 0 9z" />
      </svg>
    </Icon>
  );
}
