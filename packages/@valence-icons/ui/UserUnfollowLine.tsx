import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _UserUnfollowLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M21 21.378v3.135A9 9 0 0 0 9 33l-3 -0.002a12 12 0 0 1 15 -11.622zM18 19.5c-4.973 0 -9 -4.027 -9 -9s4.027 -9 9 -9 9 4.027 9 9 -4.027 9 -9 9zm0 -3c3.315 0 6 -2.685 6 -6s-2.685 -6 -6 -6 -6 2.685 -6 6 2.685 6 6 6zm10.5 9.879l3.181 -3.183 2.123 2.123L30.621 28.5l3.183 3.181 -2.123 2.123L28.5 30.621l-3.181 3.183 -2.123 -2.123L26.379 28.5l-3.183 -3.181 2.123 -2.123L28.5 26.379z" />
      </svg>
    </Icon>
  );
}
