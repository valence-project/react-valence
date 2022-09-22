import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _SuitcaseFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M22.5 4.5c0.828 0 1.5 0.672 1.5 1.5v3h7.5c0.828 0 1.5 0.672 1.5 1.5v19.5c0 0.828 -0.672 1.5 -1.5 1.5H4.5c-0.828 0 -1.5 -0.672 -1.5 -1.5V10.5c0 -0.828 0.672 -1.5 1.5 -1.5h7.5V6c0 -0.828 0.672 -1.5 1.5 -1.5h9zM12 12H9v16.5h3V12zm15 0h-3v16.5h3V12zm-6 -4.5h-6v1.5h6V7.5z" />
      </svg>
    </Icon>
  );
}
