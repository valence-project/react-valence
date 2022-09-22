import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CloseCircleLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 33C9.716 33 3 26.285 3 18S9.716 3 18 3s15 6.716 15 15 -6.716 15 -15 15zm0 -3a12 12 0 1 0 0 -24 12 12 0 0 0 0 24zm0 -14.121l4.242 -4.244 2.123 2.123L20.121 18l4.244 4.242 -2.123 2.123L18 20.121l-4.242 4.244 -2.123 -2.123L15.879 18 11.636 13.758l2.123 -2.123L18 15.879z" />
      </svg>
    </Icon>
  );
}
