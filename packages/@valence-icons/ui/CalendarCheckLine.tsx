import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CalendarCheckLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M13.5 1.5v3h9V1.5h3v3h6a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5h6V1.5h3zm16.5 13.5H6v13.5h24v-13.5zm-7.446 1.704l2.121 2.121 -7.425 7.425 -5.304 -5.304L14.07 18.825l3.181 3.183 5.304 -5.304zM10.5 7.5H6v4.5h24V7.5h-4.5v1.5h-3V7.5H13.5v1.5H10.5V7.5z" />
      </svg>
    </Icon>
  );
}
