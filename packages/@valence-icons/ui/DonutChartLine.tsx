import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _DonutChartLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M16.5 3.075v3.018C10.581 6.831 6 11.88 6 18c0 6.627 5.373 12 12 12 2.773 0 5.325 -0.941 7.359 -2.52l2.135 2.135C24.907 31.729 21.6 33 18 33 9.716 33 3 26.285 3 18c0 -7.777 5.921 -14.174 13.5 -14.925zM32.925 19.5c-0.3 3.017 -1.491 5.771 -3.31 7.992l-2.135 -2.133c1.29 -1.66 2.154 -3.667 2.427 -5.859h3.019zM19.503 3.075c7.086 0.704 12.72 6.339 13.425 13.425h-3.019c-0.676 -5.427 -4.979 -9.729 -10.405 -10.407V3.074z" />
      </svg>
    </Icon>
  );
}
