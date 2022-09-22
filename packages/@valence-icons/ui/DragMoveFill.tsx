import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _DragMoveFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 33l-6 -6h12l-6 6zm0 -30l6 6H12l6 -6zm0 18a3 3 0 1 1 0 -6 3 3 0 0 1 0 6zM3 18l6 -6v12l-6 -6zm30 0l-6 6V12l6 6z" />
      </svg>
    </Icon>
  );
}
