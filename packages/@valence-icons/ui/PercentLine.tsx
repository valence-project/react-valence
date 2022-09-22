import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _PercentLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M26.25 31.5a5.25 5.25 0 1 1 0 -10.5 5.25 5.25 0 0 1 0 10.5zm0 -3a2.25 2.25 0 1 0 0 -4.5 2.25 2.25 0 0 0 0 4.5zm-16.5 -13.5a5.25 5.25 0 1 1 0 -10.5 5.25 5.25 0 0 1 0 10.5zm0 -3a2.25 2.25 0 1 0 0 -4.5 2.25 2.25 0 0 0 0 4.5zm18.857 -6.728l2.121 2.121L7.395 30.727l-2.121 -2.121L28.605 5.272z" />
      </svg>
    </Icon>
  );
}
