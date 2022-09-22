import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ScreenshotLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M17.989 21.611l-2.328 2.328a6 6 0 1 1 -2.127 -2.115l2.333 -2.334 -6.277 -6.277 2.123 -2.123 6.277 6.277 6.284 -6.284 2.121 2.121 -6.285 6.285 2.343 2.34a6 6 0 1 1 -2.121 2.121l-2.341 -2.34zM10.5 30a3 3 0 1 0 0 -6 3 3 0 0 0 0 6zm15 0a3 3 0 1 0 0 -6 3 3 0 0 0 0 6zm3 -10.5V7.5H7.5v12H4.5V6a1.5 1.5 0 0 1 1.5 -1.5h24a1.5 1.5 0 0 1 1.5 1.5v13.5h-3z" />
      </svg>
    </Icon>
  );
}
