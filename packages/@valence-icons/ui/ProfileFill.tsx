import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ProfileFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M3 5.989A1.5 1.5 0 0 1 4.488 4.5h27.024c0.822 0 1.488 0.667 1.488 1.49v24.021a1.5 1.5 0 0 1 -1.488 1.49H4.488A1.49 1.49 0 0 1 3 30.011V5.989zM9 22.5v3h18v-3H9zm0 -12v9h9V10.5H9zm12 0v3h6V10.5h-6zm0 6v3h6v-3h-6zM12 13.5h3v3H12V13.5z" />
      </svg>
    </Icon>
  );
}
