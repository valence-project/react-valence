import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _BookmarkLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M7.5 3h21a1.5 1.5 0 0 1 1.5 1.5v28.715a0.75 0.75 0 0 1 -1.149 0.636L18 27.045l-10.851 6.804A0.75 0.75 0 0 1 6 33.215V4.5a1.5 1.5 0 0 1 1.5 -1.5zm19.5 3H9v23.148l9 -5.642 9 5.642V6z" />
      </svg>
    </Icon>
  );
}
