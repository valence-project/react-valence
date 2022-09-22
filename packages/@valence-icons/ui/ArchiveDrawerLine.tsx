import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ArchiveDrawerLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 4.488C4.5 3.666 5.167 3 5.989 3h24.021a1.5 1.5 0 0 1 1.49 1.488v27.024a1.49 1.49 0 0 1 -1.49 1.488H5.989A1.5 1.5 0 0 1 4.5 31.512V4.488zM28.5 16.5V6H7.5v10.5h21zm0 3H7.5v10.5h21v-10.5zM13.5 9h9v3H13.5V9zm0 13.5h9v3H13.5v-3z" />
      </svg>
    </Icon>
  );
}
