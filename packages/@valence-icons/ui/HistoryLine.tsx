import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _HistoryLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 3c8.284 0 15 6.716 15 15s-6.716 15 -15 15S3 26.285 3 18h3c0 6.627 5.373 12 12 12s12 -5.373 12 -12 -5.373 -12 -12 -12C13.875 6 10.236 8.08 8.078 11.25H12v3H3v-9h3V9c2.736 -3.645 7.094 -6 12 -6zm1.5 7.5v6.877l4.864 4.864 -2.123 2.123L16.5 18.62V10.5h3z" />
      </svg>
    </Icon>
  );
}
