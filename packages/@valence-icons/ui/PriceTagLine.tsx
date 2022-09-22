import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _PriceTagLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 10.5l12.668 -8.445a1.5 1.5 0 0 1 1.665 0L31.5 10.5v21a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V10.5zm3 1.605V30h21V12.105l-10.5 -6.999L7.5 12.105zM18 16.5a3 3 0 1 1 0 -6 3 3 0 0 1 0 6z" />
      </svg>
    </Icon>
  );
}
