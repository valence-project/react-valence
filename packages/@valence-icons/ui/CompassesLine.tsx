import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CompassesLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M16.5 6.189V3h3v3.189a6.003 6.003 0 0 1 2.704 10.092l9.095 15.753 -2.598 1.5 -9.095 -15.752a6.006 6.006 0 0 1 -3.213 0L7.299 33.534l-2.598 -1.5 9.095 -15.753A6.003 6.003 0 0 1 16.5 6.189zM18 15a3 3 0 1 0 0 -6 3 3 0 0 0 0 6z" />
      </svg>
    </Icon>
  );
}
