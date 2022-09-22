import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ImageAddFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M31.5 22.5v4.5h4.5v3h-4.5v4.5h-3v-4.5h-4.5v-3h4.5v-4.5h3zm0.012 -18c0.822 0 1.488 0.667 1.488 1.49v14.024A8.985 8.985 0 0 0 30 19.5V7.5H6l0.002 21 13.938 -13.939a1.498 1.498 0 0 1 1.98 -0.126l0.14 0.128 5.319 5.325a9.005 9.005 0 0 0 -5.865 11.614L4.488 31.5A1.49 1.49 0 0 1 3 30.011V5.989A1.5 1.5 0 0 1 4.488 4.5h27.024zM12 10.5a3 3 0 1 1 0 6 3 3 0 0 1 0 -6z" />
      </svg>
    </Icon>
  );
}
