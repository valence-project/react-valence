import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _TestTubeFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M25.5 3v3h-1.5v21c0 3.315 -2.685 6 -6 6s-6 -2.685 -6 -6V6H10.5V3h15zm-6 19.5c-0.828 0 -1.5 0.672 -1.5 1.5s0.672 1.5 1.5 1.5 1.5 -0.672 1.5 -1.5 -0.672 -1.5 -1.5 -1.5zm-3 -4.5c-0.828 0 -1.5 0.672 -1.5 1.5s0.672 1.5 1.5 1.5 1.5 -0.672 1.5 -1.5 -0.672 -1.5 -1.5 -1.5zm4.5 -12h-6v6h6V6z" />
      </svg>
    </Icon>
  );
}
