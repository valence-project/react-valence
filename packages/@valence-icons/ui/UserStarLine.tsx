import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _UserStarLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 21v3a9 9 0 0 0 -9 9H6a12 12 0 0 1 12 -12zm0 -1.5c-4.973 0 -9 -4.027 -9 -9s4.027 -9 9 -9 9 4.027 9 9 -4.027 9 -9 9zm0 -3c3.315 0 6 -2.685 6 -6s-2.685 -6 -6 -6 -6 2.685 -6 6 2.685 6 6 6zm9 15.75l-4.409 2.317 0.842 -4.908 -3.565 -3.477 4.929 -0.717L27 21l2.205 4.465 4.928 0.717 -3.565 3.477 0.84 4.908L27 32.25z" />
      </svg>
    </Icon>
  );
}
