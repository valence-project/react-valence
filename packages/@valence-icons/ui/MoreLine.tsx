import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _MoreLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6.75 15.75c-1.237 0 -2.25 1.013 -2.25 2.25s1.013 2.25 2.25 2.25S9 19.237 9 18s-1.013 -2.25 -2.25 -2.25zm22.5 0c-1.237 0 -2.25 1.013 -2.25 2.25s1.013 2.25 2.25 2.25S31.5 19.237 31.5 18s-1.013 -2.25 -2.25 -2.25zm-11.25 0c-1.237 0 -2.25 1.013 -2.25 2.25s1.013 2.25 2.25 2.25 2.25 -1.013 2.25 -2.25 -1.013 -2.25 -2.25 -2.25z" />
      </svg>
    </Icon>
  );
}
