import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _PieChartLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 33C9.716 33 3 26.285 3 18c0 -6.717 4.415 -12.402 10.5 -14.313v3.186A12.005 12.005 0 0 0 18 30a12.005 12.005 0 0 0 11.127 -7.5h3.186c-1.911 6.086 -7.596 10.5 -14.313 10.5zm14.925 -13.5H16.5V3.075c0.494 -0.05 0.995 -0.075 1.5 -0.075 8.284 0 15 6.716 15 15 0 0.506 -0.026 1.006 -0.075 1.5zM19.5 6.093V16.5h10.407A12.006 12.006 0 0 0 19.5 6.093z" />
      </svg>
    </Icon>
  );
}
