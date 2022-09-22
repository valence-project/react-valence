import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _HistoryFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 3c8.284 0 15 6.716 15 15s-6.716 15 -15 15S3 26.285 3 18h3c0 6.627 5.373 12 12 12s12 -5.373 12 -12 -5.373 -12 -12 -12C14.304 6 10.998 7.671 8.797 10.297L12 13.5H3V4.5l3.671 3.669C9.42 5.004 13.476 3 18 3zm1.5 7.5v6.877l4.864 4.864 -2.123 2.123L16.5 18.62V10.5h3z" />
      </svg>
    </Icon>
  );
}
