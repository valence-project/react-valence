import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _GooglePlayLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6 2.601a1.5 1.5 0 0 1 0.752 0.203l24.006 13.899a1.5 1.5 0 0 1 0 2.595L6.752 33.197A1.5 1.5 0 0 1 4.5 31.899V4.101a1.5 1.5 0 0 1 1.5 -1.5zm12.438 17.52l-6.747 6.747 8.549 -4.949 -1.8 -1.8zM7.5 9.177v17.64l8.82 -8.82 -8.82 -8.82zm15.426 6.453L20.559 18l2.367 2.365L27.012 18l-4.088 -2.369zm-11.235 -6.504l6.75 6.75 1.799 -1.8 -8.549 -4.95z" />
      </svg>
    </Icon>
  );
}
