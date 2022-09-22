import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _UserStarFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 21v12H6a12 12 0 0 1 12 -12zm9 11.25l-4.409 2.317 0.842 -4.908 -3.565 -3.477 4.929 -0.717L27 21l2.205 4.465 4.928 0.717 -3.565 3.477 0.84 4.908L27 32.25zM18 19.5c-4.973 0 -9 -4.027 -9 -9s4.027 -9 9 -9 9 4.027 9 9 -4.027 9 -9 9z" />
      </svg>
    </Icon>
  );
}
