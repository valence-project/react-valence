import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _TimerFlashFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M9.573 8.952A13.443 13.443 0 0 1 18 6c3.188 0 6.117 1.104 8.427 2.952l2.179 -2.179 2.121 2.121 -2.179 2.179a13.5 13.5 0 1 1 -21.096 0L5.272 8.895l2.121 -2.121 2.179 2.179zM19.5 18V11.242L12 21h4.5v6.75l7.5 -9.75h-4.5zM12 1.5h12v3H12V1.5z" />
      </svg>
    </Icon>
  );
}
