import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CalendarCheckFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M13.5 1.5v3h9V1.5h3v3h6a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5h6V1.5h3zm16.5 10.5H6v16.5h24V12zm-7.446 3.204l2.121 2.121 -7.425 7.425 -5.304 -5.304L14.07 17.325l3.181 3.183 5.304 -5.304z" />
      </svg>
    </Icon>
  );
}
