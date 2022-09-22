import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ShieldStarLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M7.5 6.906v13.777a6 6 0 0 0 2.671 4.992L18 30.896l7.829 -5.22A6 6 0 0 0 28.5 20.685V6.906L18 4.575 7.5 6.906zM5.675 4.239L18 1.5l12.326 2.739a1.5 1.5 0 0 1 1.175 1.464v14.98a9 9 0 0 1 -4.008 7.488L18 34.5l-9.492 -6.329A9 9 0 0 1 4.5 20.685V5.703a1.5 1.5 0 0 1 1.175 -1.464zM18 20.25l-4.409 2.317 0.842 -4.908 -3.565 -3.477 4.929 -0.717L18 9l2.205 4.465 4.928 0.717 -3.565 3.477 0.84 4.908L18 20.25z" />
      </svg>
    </Icon>
  );
}
