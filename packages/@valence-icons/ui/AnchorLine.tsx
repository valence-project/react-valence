import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _AnchorLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M3.075 16.5H10.5v3H6.093A12.006 12.006 0 0 0 16.5 29.907V14.811A6.003 6.003 0 0 1 18 3a6 6 0 0 1 1.5 11.811v15.096A12.006 12.006 0 0 0 29.907 19.5H25.5v-3h7.425c0.05 0.494 0.075 0.995 0.075 1.5 0 8.284 -6.716 15 -15 15S3 26.285 3 18c0 -0.506 0.026 -1.006 0.075 -1.5zM18 12a3 3 0 1 0 0 -6 3 3 0 0 0 0 6z" />
      </svg>
    </Icon>
  );
}
