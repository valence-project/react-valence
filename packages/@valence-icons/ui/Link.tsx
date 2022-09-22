import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _Link(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M27.546 23.304L25.425 21.18l2.121 -2.121a7.5 7.5 0 1 0 -10.607 -10.607L14.819 10.575 12.696 8.454 14.82 6.333a10.5 10.5 0 0 1 14.85 14.85l-2.123 2.121zm-4.242 4.242l-2.123 2.121a10.5 10.5 0 0 1 -14.85 -14.85l2.123 -2.121L10.575 14.82l-2.121 2.121a7.5 7.5 0 1 0 10.607 10.607l2.121 -2.121 2.123 2.121zm-1.062 -15.91l2.123 2.123 -10.607 10.605 -2.123 -2.121 10.607 -10.605z" />
      </svg>
    </Icon>
  );
}
