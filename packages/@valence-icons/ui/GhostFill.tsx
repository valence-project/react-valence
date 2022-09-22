import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _GhostFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 3a13.5 13.5 0 0 1 13.5 13.5v11.25a5.25 5.25 0 0 1 -9.585 2.964 4.498 4.498 0 0 1 -7.835 0 5.25 5.25 0 0 1 -9.573 -2.675L4.5 27.748V16.5a13.5 13.5 0 0 1 13.5 -13.5zm0 15c-1.657 0 -3 1.68 -3 3.75s1.343 3.75 3 3.75 3 -1.68 3 -3.75 -1.343 -3.75 -3 -3.75zM14.25 12a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0 -4.5zm7.5 0a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0 -4.5z" />
      </svg>
    </Icon>
  );
}
