import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ThermometerFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30.834 5.166c2.343 2.343 2.343 6.141 0 8.486l-12.3 12.3c-0.963 0.963 -2.226 1.571 -3.58 1.72l-5.067 0.561 -3.447 3.45c-0.585 0.585 -1.536 0.585 -2.121 0 -0.585 -0.587 -0.585 -1.536 0 -2.123l3.447 -3.449 0.563 -5.066c0.15 -1.355 0.758 -2.618 1.72 -3.58l12.3 -12.3c2.345 -2.343 6.143 -2.343 8.486 0zm-13.788 13.788L14.925 21.075l3.181 3.183 2.121 -2.123 -3.181 -3.181zm4.242 -4.242l-2.121 2.121 3.181 3.181 2.123 -2.121 -3.183 -3.181zm4.244 -4.244l-2.121 2.121 3.18 3.183L28.715 13.65l-3.181 -3.183z" />
      </svg>
    </Icon>
  );
}
