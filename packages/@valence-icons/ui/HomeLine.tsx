import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _HomeLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M31.5 30a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V14.235a1.5 1.5 0 0 1 0.579 -1.185l12 -9.333a1.5 1.5 0 0 1 1.842 0l12 9.333a1.5 1.5 0 0 1 0.579 1.185V30zm-3 -1.5V14.967l-10.5 -8.166 -10.5 8.166V28.5h21z" />
      </svg>
    </Icon>
  );
}
