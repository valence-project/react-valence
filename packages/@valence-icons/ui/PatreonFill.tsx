import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _PatreonFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M22.5 25.5a11.25 11.25 0 1 1 0 -22.5 11.25 11.25 0 0 1 0 22.5zM3 3h6v30H3V3z" />
      </svg>
    </Icon>
  );
}
