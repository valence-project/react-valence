import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _TaxiLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M33 16.5v15a1.5 1.5 0 0 1 -1.5 1.5h-1.5a1.5 1.5 0 0 1 -1.5 -1.5v-1.5H7.5v1.5a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V16.5l3.671 -7.341A3 3 0 0 1 9.355 7.5H13.5V4.5h9v3h4.146a3 3 0 0 1 2.683 1.659L33 16.5zm-3 3H6v7.5h24v-7.5zM6.354 16.5h23.292l-3 -6H9.354l-3 6zM9.75 25.5a2.25 2.25 0 1 1 0 -4.5 2.25 2.25 0 0 1 0 4.5zm16.5 0a2.25 2.25 0 1 1 0 -4.5 2.25 2.25 0 0 1 0 4.5z" />
      </svg>
    </Icon>
  );
}
