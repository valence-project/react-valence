import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _GlobeFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M19.5 31.5h7.5v3H9v-3h7.5v-1.575a15.003 15.003 0 0 1 -11.526 -7.482l2.606 -1.488A12 12 0 1 0 23.955 4.579l1.488 -2.606A14.994 14.994 0 0 1 33 15c0 7.777 -5.921 14.174 -13.5 14.925V31.5zm-1.5 -6a10.5 10.5 0 1 1 0 -21 10.5 10.5 0 0 1 0 21z" />
      </svg>
    </Icon>
  );
}
