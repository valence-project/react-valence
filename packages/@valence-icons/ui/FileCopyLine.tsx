import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FileCopyLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M10.5 9V4.5a1.5 1.5 0 0 1 1.5 -1.5h18a1.5 1.5 0 0 1 1.5 1.5v21a1.5 1.5 0 0 1 -1.5 1.5h-4.5v4.5c0 0.828 -0.675 1.5 -1.51 1.5H6.01A1.501 1.501 0 0 1 4.5 31.5l0.005 -21c0 -0.828 0.675 -1.5 1.51 -1.5H10.5zM7.505 12L7.5 30h15V12H7.505zM13.5 9h12v15h3V6H13.5v3z" />
      </svg>
    </Icon>
  );
}
