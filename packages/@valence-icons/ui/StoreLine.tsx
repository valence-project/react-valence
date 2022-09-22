import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _StoreLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M31.5 17.469V31.5a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5v-14.031A5.978 5.978 0 0 1 3 13.5V4.5a1.5 1.5 0 0 1 1.5 -1.5h27a1.5 1.5 0 0 1 1.5 1.5v9c0 1.521 -0.567 2.91 -1.5 3.969zm-3 1.842a6.01 6.01 0 0 1 -6 -1.842A5.985 5.985 0 0 1 18 19.5a5.985 5.985 0 0 1 -4.5 -2.031 5.985 5.985 0 0 1 -6 1.842V30h21v-10.689zM21 13.5a1.5 1.5 0 0 1 3 0 3 3 0 1 0 6 0V6H6v7.5a3 3 0 1 0 6 0 1.5 1.5 0 1 1 3 0 3 3 0 1 0 6 0z" />
      </svg>
    </Icon>
  );
}
