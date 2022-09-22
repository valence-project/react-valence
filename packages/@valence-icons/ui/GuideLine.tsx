import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _GuideLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M19.5 12v12a4.5 4.5 0 0 1 -4.5 4.5H11.745a4.502 4.502 0 1 1 0 -3H15a1.5 1.5 0 0 0 1.5 -1.5V12a4.5 4.5 0 0 1 4.5 -4.5h4.5V3l7.5 6 -7.5 6V10.5h-4.5a1.5 1.5 0 0 0 -1.5 1.5zM7.5 28.5a1.5 1.5 0 1 0 0 -3 1.5 1.5 0 0 0 0 3z" />
      </svg>
    </Icon>
  );
}
