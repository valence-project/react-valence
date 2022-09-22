import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _MapLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M3 7.5l10.5 -4.5 9 4.5 9.454 -4.051a0.75 0.75 0 0 1 1.045 0.69V28.5l-10.5 4.5 -9 -4.5 -9.454 4.051a0.75 0.75 0 0 1 -1.045 -0.69V7.5zm19.402 3.306l-9 -4.5L6 9.479v18.972l7.598 -3.255 9 4.5L30 26.52V7.55l-7.598 3.255z" />
      </svg>
    </Icon>
  );
}
