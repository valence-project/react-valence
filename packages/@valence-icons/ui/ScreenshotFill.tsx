import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ScreenshotFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M17.989 21.611l-2.328 2.328a6 6 0 1 1 -2.127 -2.115l2.333 -2.334 -4.686 -4.688a2.25 2.25 0 0 1 0 -3.181l0.531 -0.531 6.277 6.277 6.284 -6.284 0.529 0.531a2.25 2.25 0 0 1 0 3.18l-4.692 4.695 2.341 2.34a6 6 0 1 1 -2.121 2.121l-2.341 -2.34zM28.5 19.5V7.5H7.5v12H4.5V6a1.5 1.5 0 0 1 1.5 -1.5h24a1.5 1.5 0 0 1 1.5 1.5v13.5h-3zM10.5 30a3 3 0 1 0 0 -6 3 3 0 0 0 0 6zm15 0a3 3 0 1 0 0 -6 3 3 0 0 0 0 6z" />
      </svg>
    </Icon>
  );
}
