import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CaravanLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M21.258 4.5c0.795 0 1.558 0.315 2.121 0.879l7.242 7.242c0.563 0.563 0.879 1.326 0.879 2.121V25.5h3v3h-12.189c-0.667 2.589 -3.015 4.5 -5.811 4.5 -2.796 0 -5.145 -1.911 -5.811 -4.5H4.5c-0.828 0 -1.5 -0.672 -1.5 -1.5V7.5c0 -1.657 1.343 -3 3 -3h15.258zM16.5 24c-1.657 0 -3 1.343 -3 3s1.343 3 3 3 3 -1.343 3 -3 -1.343 -3 -3 -3zm4.758 -16.5H6v18h4.689c0.666 -2.588 3.015 -4.5 5.811 -4.5 2.796 0 5.145 1.912 5.811 4.5H28.5V14.742L21.258 7.5zM21 10.5v9H9V10.5h12zm-3 3H12v3h6V13.5z" />
      </svg>
    </Icon>
  );
}
