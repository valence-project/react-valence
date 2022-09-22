import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _PushpinLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M20.742 2.529l12.729 12.729 -2.123 2.121 -1.06 -1.06 -6.363 6.363 -1.06 5.304 -2.123 2.121 -6.363 -6.365 -7.425 7.425 -2.121 -2.121 7.425 -7.425 -6.365 -6.363 2.121 -2.123L13.32 12.075l6.363 -6.363 -1.06 -1.06 2.121 -2.123zm1.062 5.304l-7.007 7.005 -4.233 0.847 9.75 9.75 0.846 -4.233 7.007 -7.005 -6.363 -6.365z" />
      </svg>
    </Icon>
  );
}
