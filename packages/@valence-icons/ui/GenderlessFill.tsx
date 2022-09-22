import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _GenderlessFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M16.5 10.599V1.5h3v9.099A11.252 11.252 0 0 1 18 33a11.25 11.25 0 0 1 -1.5 -22.401z" />
      </svg>
    </Icon>
  );
}
