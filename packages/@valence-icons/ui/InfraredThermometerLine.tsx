import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _InfraredThermometerLine(
  props: IconPropsWithoutChildren
) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M31.5 3v13.5h-4.502L27 18c0 3.315 -2.685 6 -6 6h-2.069l-0.919 4.667 1.367 1.982c0.471 0.682 0.3 1.617 -0.383 2.087 -0.251 0.173 -0.547 0.265 -0.852 0.265H4.5l3.47 -15.036L4.5 16.5l6 -13.5h21zm-3 3H12.45L8.482 14.925l2.978 1.256L8.271 30h7.017l-0.464 -0.672L17.94 13.5H28.5V6zm-4.502 10.5h-3.591l-0.886 4.5H21c1.657 0 3 -1.343 3 -3l-0.002 -1.5z" />
      </svg>
    </Icon>
  );
}
