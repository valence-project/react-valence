import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _MoneyCnyBoxLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm1.5 3v21h24V7.5H6zm13.5 12h4.5v3h-4.5v3h-3v-3H12v-3h4.5v-1.5H12v-3h3.879L12.696 11.819 14.82 9.696 18 12.879l3.181 -3.183 2.123 2.123L20.121 15H24v3h-4.5v1.5z" />
      </svg>
    </Icon>
  );
}
