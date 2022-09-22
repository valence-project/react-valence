import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _SuitcaseLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M22.5 4.5c0.828 0 1.5 0.672 1.5 1.5v3h7.5c0.828 0 1.5 0.672 1.5 1.5v19.5c0 0.828 -0.672 1.5 -1.5 1.5H4.5c-0.828 0 -1.5 -0.672 -1.5 -1.5V10.5c0 -0.828 0.672 -1.5 1.5 -1.5h7.5V6c0 -0.828 0.672 -1.5 1.5 -1.5h9zm1.5 7.5H12v16.5h12V12zM6 12v16.5h3V12H6zm15 -4.5h-6v1.5h6V7.5zm6 4.5v16.5h3V12h-3z" />
      </svg>
    </Icon>
  );
}
