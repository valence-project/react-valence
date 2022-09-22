import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _RefreshLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M8.194 6.649A14.942 14.942 0 0 1 18 3c8.284 0 15 6.716 15 15 0 3.204 -1.005 6.174 -2.715 8.61L25.5 18h4.5A12 12 0 0 0 9.69 9.342l-1.496 -2.692zm19.611 22.701A14.942 14.942 0 0 1 18 33C9.716 33 3 26.285 3 18c0 -3.204 1.005 -6.174 2.715 -8.61L10.5 18H6a12 12 0 0 0 20.31 8.658l1.496 2.692z" />
      </svg>
    </Icon>
  );
}
