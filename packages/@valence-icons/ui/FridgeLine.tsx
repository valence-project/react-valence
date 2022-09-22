import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FridgeLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M28.5 1.5c0.828 0 1.5 0.672 1.5 1.5v30c0 0.828 -0.672 1.5 -1.5 1.5H7.5c-0.828 0 -1.5 -0.672 -1.5 -1.5V3c0 -0.828 0.672 -1.5 1.5 -1.5h21zm-1.5 16.5H9v13.5h18v-13.5zm-12 3v6H12v-6h3zm12 -16.5H9v10.5h18V4.5zm-12 3v4.5H12V7.5h3z" />
      </svg>
    </Icon>
  );
}
