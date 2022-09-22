import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _MusicFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 20.303V4.5h12v4.5h-9v16.5a6 6 0 1 1 -3 -5.197z" />
      </svg>
    </Icon>
  );
}
