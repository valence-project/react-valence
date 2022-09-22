import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _MacFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M21 27v3l3 1.5v1.5H12l-0.006 -1.494L15 30v-3H4.488A1.497 1.497 0 0 1 3 25.489V6.01C3 5.176 3.683 4.5 4.488 4.5h27.024c0.822 0 1.488 0.673 1.488 1.51v19.479c0 0.834 -0.682 1.51 -1.488 1.51H21zM6 21v3h24v-3H6z" />
      </svg>
    </Icon>
  );
}
