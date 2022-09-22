import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _BarChartBoxLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm1.5 3v21h24V7.5H6zm4.5 12h3v6H10.5v-6zm6 -9h3v15h-3V10.5zm6 4.5h3v10.5h-3v-10.5z" />
      </svg>
    </Icon>
  );
}
