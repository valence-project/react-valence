import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _NpmjsLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30 4.5c0.828 0 1.5 0.672 1.5 1.5v24c0 0.828 -0.672 1.5 -1.5 1.5H6c-0.828 0 -1.5 -0.672 -1.5 -1.5V6c0 -0.828 0.672 -1.5 1.5 -1.5h24zm-1.5 3H7.5v21h21V7.5zm-3 3v15h-3.75V14.25H18V25.5H10.5V10.5h15z" />
      </svg>
    </Icon>
  );
}
