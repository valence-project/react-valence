import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ArchiveLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 15H3V6.005C3 5.173 3.683 4.5 4.488 4.5h27.024A1.485 1.485 0 0 1 33 6.005V15h-1.5v15.002a1.494 1.494 0 0 1 -1.49 1.498H5.989A1.494 1.494 0 0 1 4.5 30.002V15zm24 0H7.5v13.5h21v-13.5zM6 7.5v4.5h24V7.5H6zm7.5 10.5h9v3H13.5v-3z" />
      </svg>
    </Icon>
  );
}
