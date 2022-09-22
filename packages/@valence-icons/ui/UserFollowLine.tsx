import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _UserFollowLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M21 21.378v3.135A9 9 0 0 0 9 33l-3 -0.002a12 12 0 0 1 15 -11.622zM18 19.5c-4.973 0 -9 -4.027 -9 -9s4.027 -9 9 -9 9 4.027 9 9 -4.027 9 -9 9zm0 -3c3.315 0 6 -2.685 6 -6s-2.685 -6 -6 -6 -6 2.685 -6 6 2.685 6 6 6zm8.69 13.371l5.303 -5.303 2.123 2.121 -7.425 7.425 -5.304 -5.304 2.123 -2.121 3.18 3.181z" />
      </svg>
    </Icon>
  );
}
