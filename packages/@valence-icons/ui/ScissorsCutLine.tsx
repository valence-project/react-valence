import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ScissorsCutLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M15 9c0 1.098 -0.295 2.128 -0.81 3.015L18 15.878l10.092 -10.092a3 3 0 0 1 4.242 0l-18.165 18.165a6 6 0 1 1 -2.121 -2.121L15.879 18 12.048 14.169A6 6 0 1 1 15 9zM12 9a3 3 0 1 0 -6 0 3 3 0 0 0 6 0zm20.334 21.213a3 3 0 0 1 -4.242 0l-7.976 -7.974 2.123 -2.123 10.095 10.096zM24 16.5h3v3h-3v-3zm6 0h3v3h-3v-3zM9 16.5h3v3H9v-3zm-6 0h3v3H3v-3zm6 13.5a3 3 0 1 0 0 -6 3 3 0 0 0 0 6z" />
      </svg>
    </Icon>
  );
}
