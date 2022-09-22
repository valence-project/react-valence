import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _InputMethodLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M7.5 7.5v21h21V7.5H7.5zM6 4.5h24a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm8.803 18l-1.23 3H10.25L16.5 10.5h3l6.25 15H22.425l-1.23 -3H14.805zm1.23 -3h3.933L18 14.7 16.034 19.5z" />
      </svg>
    </Icon>
  );
}
