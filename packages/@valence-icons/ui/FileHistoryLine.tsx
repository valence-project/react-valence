import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FileHistoryLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M24 3l7.5 7.5v20.989c0 0.834 -0.667 1.51 -1.49 1.51H5.989C5.167 33 4.5 32.318 4.5 31.512V4.488C4.5 3.666 5.171 3 5.998 3H24zm-1.5 3H7.5v24h21V12h-6V6zm-3 7.5v6h4.5v3h-7.5V13.5h3z" />
      </svg>
    </Icon>
  );
}
