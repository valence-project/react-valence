import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CheckboxMultipleFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M10.5 10.5V4.5a1.5 1.5 0 0 1 1.5 -1.5h19.5a1.5 1.5 0 0 1 1.5 1.5v19.5a1.5 1.5 0 0 1 -1.5 1.5h-6v5.989c0 0.834 -0.673 1.51 -1.51 1.51H4.511A1.509 1.509 0 0 1 3 31.489l0.005 -19.479C3.005 11.176 3.678 10.5 4.515 10.5H10.5zm3 0h10.489C24.823 10.5 25.5 11.174 25.5 12.011V22.5h4.5V6H13.5v4.5zm-0.746 16.5l8.484 -8.486 -2.121 -2.121 -6.363 6.365L9.57 19.575l-2.121 2.121L12.755 27z" />
      </svg>
    </Icon>
  );
}
