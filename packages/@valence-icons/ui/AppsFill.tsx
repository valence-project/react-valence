import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _AppsFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M10.125 3.75A6.375 6.375 0 0 1 16.5 10.125V16.5H10.125a6.375 6.375 0 1 1 0 -12.75zm0 15.75H16.5v6.375A6.375 6.375 0 1 1 10.125 19.5zm15.75 -15.75a6.375 6.375 0 1 1 0 12.75H19.5V10.125a6.375 6.375 0 0 1 6.375 -6.375zM19.5 19.5h6.375A6.375 6.375 0 1 1 19.5 25.875V19.5z" />
      </svg>
    </Icon>
  );
}
