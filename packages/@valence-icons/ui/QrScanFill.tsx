import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _QrScanFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M31.5 22.5v7.51a1.491 1.491 0 0 1 -1.49 1.49H5.989A1.491 1.491 0 0 1 4.5 30.011V22.5h27zM3 16.5h30v3H3v-3zm28.5 -3H4.5V5.989C4.5 5.167 5.167 4.5 5.989 4.5h24.021c0.822 0 1.49 0.667 1.49 1.49V13.5z" />
      </svg>
    </Icon>
  );
}
