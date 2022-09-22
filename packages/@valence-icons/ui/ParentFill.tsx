import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ParentFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M10.5 16.5a6.75 6.75 0 1 1 0 -13.5 6.75 6.75 0 0 1 0 13.5zm15.75 6a6 6 0 1 1 0 -12 6 6 0 0 1 0 12zm0 1.5a6.75 6.75 0 0 1 6.75 6.75v0.75h-13.5v-0.75a6.75 6.75 0 0 1 6.75 -6.75zM10.5 18a7.5 7.5 0 0 1 7.5 7.5v6H3v-6a7.5 7.5 0 0 1 7.5 -7.5z" />
      </svg>
    </Icon>
  );
}
