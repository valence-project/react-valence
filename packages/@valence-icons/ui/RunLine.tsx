import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _RunLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M14.745 13.185L12 14.184V19.5H9V12.075h0.022l7.902 -2.877c0.366 -0.14 0.765 -0.21 1.173 -0.197a3.924 3.924 0 0 1 3.641 2.73c0.279 0.874 0.534 1.466 0.765 1.773A7.488 7.488 0 0 0 28.5 16.5v3a10.479 10.479 0 0 1 -8.103 -3.821l-1.045 5.934L22.5 24.255V34.5h-3v-8.847l-3.405 -2.856 -1.091 6.191 -10.341 -1.823 0.522 -2.955 7.386 1.302L14.745 13.185zM20.25 8.25a3 3 0 1 1 0 -6 3 3 0 0 1 0 6z" />
      </svg>
    </Icon>
  );
}
