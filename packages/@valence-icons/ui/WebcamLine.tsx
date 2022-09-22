import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _WebcamLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M16.5 31.5v-1.605A10.503 10.503 0 0 1 7.5 19.5V12a10.5 10.5 0 1 1 21 0v7.5a10.503 10.503 0 0 1 -9 10.395V31.5h6v3H10.5v-3h6zm1.5 -27a7.5 7.5 0 0 0 -7.5 7.5v7.5a7.5 7.5 0 0 0 15 0V12a7.5 7.5 0 0 0 -7.5 -7.5zm0 9a1.5 1.5 0 1 0 0 -3 1.5 1.5 0 0 0 0 3zm0 3a4.5 4.5 0 1 1 0 -9 4.5 4.5 0 0 1 0 9z" />
      </svg>
    </Icon>
  );
}
