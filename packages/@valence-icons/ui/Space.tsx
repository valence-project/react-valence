import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _Space(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6 13.5v6h24V13.5h3v7.5a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V13.5h3z" />
      </svg>
    </Icon>
  );
}
