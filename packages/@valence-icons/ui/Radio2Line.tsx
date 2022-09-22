import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _Radio2Line(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M9 4.5V1.5h3v3h19.512c0.822 0 1.488 0.667 1.488 1.49v24.021a1.5 1.5 0 0 1 -1.488 1.49H4.488A1.49 1.49 0 0 1 3 30.011V5.989A1.5 1.5 0 0 1 4.488 4.5H9zM6 7.5v21h24V7.5H6zm7.5 15a4.5 4.5 0 1 1 0 -9 4.5 4.5 0 0 1 0 9zm7.5 -9h6v3h-6V13.5zm0 6h6v3h-6v-3z" />
      </svg>
    </Icon>
  );
}
