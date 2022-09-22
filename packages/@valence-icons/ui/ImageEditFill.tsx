import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ImageEditFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30 4.5c0.828 0 1.5 0.672 1.5 1.5v2.635l-3 3V7.5H7.5v12.15l6 -6 6.492 6.493 -1.99 1.99 -0.009 6.358 6.369 0.009 1.995 -1.995L28.349 28.5H28.5v-4.137l3 -3V30c0 0.828 -0.672 1.5 -1.5 1.5H6c-0.828 0 -1.5 -0.672 -1.5 -1.5V6c0 -0.828 0.672 -1.5 1.5 -1.5h24zm2.667 7.212l2.121 2.121L23.121 25.5l-2.124 -0.003 0.003 -2.118 11.667 -11.667zM23.25 10.5c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25 -2.25 2.25S21 13.992 21 12.75 22.008 10.5 23.25 10.5z" />
      </svg>
    </Icon>
  );
}
