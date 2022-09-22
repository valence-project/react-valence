import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _InputMethodFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6 4.5h24a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm8.803 18h6.393l1.23 3h3.324L19.5 10.5h-3L10.25 25.5H13.575l1.23 -3zm1.23 -3L18 14.7l1.966 4.8H16.035z" />
      </svg>
    </Icon>
  );
}
