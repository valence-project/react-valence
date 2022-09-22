import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ParentLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M10.5 13.5a3.75 3.75 0 1 0 0 -7.5 3.75 3.75 0 0 0 0 7.5zm0 3a6.75 6.75 0 1 1 0 -13.5 6.75 6.75 0 0 1 0 13.5zm15.75 3a3 3 0 1 0 0 -6 3 3 0 0 0 0 6zm0 3a6 6 0 1 1 0 -12 6 6 0 0 1 0 12zm3.75 9v-0.75a3.75 3.75 0 1 0 -7.5 0v0.75h-3v-0.75a6.75 6.75 0 1 1 13.5 0v0.75h-3zm-15 0v-6a4.5 4.5 0 0 0 -9 0v6H3v-6a7.5 7.5 0 0 1 15 0v6h-3z" />
      </svg>
    </Icon>
  );
}
