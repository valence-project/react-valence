import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ChatHistoryLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 3c8.284 0 15 6.716 15 15s-6.716 15 -15 15c-2.553 0 -4.958 -0.637 -7.062 -1.763L3 33l1.764 -7.935C3.639 22.959 3 20.554 3 18 3 9.716 9.716 3 18 3zm0 3c-6.627 0 -12 5.373 -12 12 0 2.002 0.489 3.927 1.41 5.649l0.525 0.981 -0.984 4.419 4.422 -0.981 0.98 0.523c1.722 0.921 3.645 1.408 5.647 1.408 6.627 0 12 -5.373 12 -12s-5.373 -12 -12 -12zm1.5 4.5v7.5h6v3h-9V10.5h3z" />
      </svg>
    </Icon>
  );
}
