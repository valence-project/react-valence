import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ArchiveDrawerFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 19.5h27v12.003c0 0.827 -0.667 1.497 -1.49 1.497H5.989A1.492 1.492 0 0 1 4.5 31.503V19.5zM4.5 4.497C4.5 3.671 5.167 3 5.989 3h24.021c0.822 0 1.49 0.669 1.49 1.497V16.5H4.5V4.497zM13.5 7.5v3h9V7.5H13.5zm0 16.5v3h9v-3H13.5z" />
      </svg>
    </Icon>
  );
}
