import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _AtLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30 18a12 12 0 1 0 -5.343 9.986l1.665 2.496A14.929 14.929 0 0 1 18 33C9.716 33 3 26.285 3 18S9.716 3 18 3s15 6.716 15 15v2.25a5.25 5.25 0 0 1 -9.594 2.949A7.5 7.5 0 1 1 22.5 12H25.5v8.25a2.25 2.25 0 0 0 4.5 0V18zm-12 -4.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0 -9z" />
      </svg>
    </Icon>
  );
}
