import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _DonutChartFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M16.5 3.075v4.53C11.412 8.335 7.5 12.712 7.5 18c0 5.799 4.701 10.5 10.5 10.5 2.358 0 4.536 -0.777 6.288 -2.091l3.205 3.205C24.907 31.729 21.6 33 18 33 9.716 33 3 26.285 3 18c0 -7.777 5.921 -14.174 13.5 -14.925zM32.925 19.5c-0.3 3.017 -1.491 5.771 -3.31 7.992l-3.205 -3.204c1.03 -1.374 1.73 -3.009 1.984 -4.788h4.533zM19.503 3.075c7.086 0.704 12.72 6.339 13.425 13.425h-4.533c-0.657 -4.598 -4.295 -8.235 -8.892 -8.893V3.074z" />
      </svg>
    </Icon>
  );
}
