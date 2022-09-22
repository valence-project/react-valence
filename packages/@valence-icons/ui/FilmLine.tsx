import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FilmLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M3 5.989A1.5 1.5 0 0 1 4.488 4.5h27.024c0.822 0 1.488 0.667 1.488 1.49v24.021a1.5 1.5 0 0 1 -1.488 1.49H4.488A1.49 1.49 0 0 1 3 30.011V5.989zM12 7.5v21h12V7.5H12zM6 7.5v3h3V7.5H6zm21 0v3h3V7.5h-3zM6 13.5v3h3V13.5H6zm21 0v3h3V13.5h-3zM6 19.5v3h3v-3H6zm21 0v3h3v-3h-3zM6 25.5v3h3v-3H6zm21 0v3h3v-3h-3z" />
      </svg>
    </Icon>
  );
}
