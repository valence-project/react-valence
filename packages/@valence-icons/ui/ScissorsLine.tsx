import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ScissorsLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M14.169 12.048L18 15.879l10.092 -10.092a3 3 0 0 1 4.242 0l-18.165 18.165a6 6 0 1 1 -2.121 -2.121L15.879 18 12.048 14.169a6 6 0 1 1 2.121 -2.121zm8.07 8.07l10.095 10.095a3 3 0 0 1 -4.242 0l-7.976 -7.974 2.123 -2.123zm-11.118 4.761a3 3 0 1 0 -4.242 4.242 3 3 0 0 0 4.242 -4.242zm0 -13.758a3 3 0 1 0 -4.242 -4.242 3 3 0 0 0 4.242 4.242z" />
      </svg>
    </Icon>
  );
}
