import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CompassLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 33C9.716 33 3 26.285 3 18S9.716 3 18 3s15 6.716 15 15 -6.716 15 -15 15zm0 -3a12 12 0 1 0 0 -24 12 12 0 0 0 0 24zm5.25 -17.25l-3 7.5 -7.5 3 3 -7.5 7.5 -3z" />
      </svg>
    </Icon>
  );
}
