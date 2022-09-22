import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _GradienterFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 33C9.716 33 3 26.285 3 18S9.716 3 18 3s15 6.716 15 15 -6.716 15 -15 15zM12.189 16.5H6.093a12.119 12.119 0 0 0 0 3h6.096a6.01 6.01 0 0 1 0 -3zm11.622 0a6.01 6.01 0 0 1 0 3h6.096a12.119 12.119 0 0 0 0 -3h-6.096zM18 21a3 3 0 1 0 0 -6 3 3 0 0 0 0 6z" />
      </svg>
    </Icon>
  );
}
