import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ThermometerLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30.834 5.166c2.343 2.343 2.343 6.141 0 8.486l-12.3 12.3c-0.963 0.963 -2.226 1.571 -3.58 1.72l-5.067 0.561 -3.447 3.45c-0.585 0.585 -1.536 0.585 -2.121 0 -0.585 -0.587 -0.585 -1.536 0 -2.123l3.447 -3.449 0.563 -5.066c0.15 -1.355 0.758 -2.618 1.72 -3.58l12.3 -12.3c2.345 -2.343 6.143 -2.343 8.486 0zm-6.363 2.121l-12.3 12.3c-0.483 0.482 -0.786 1.113 -0.861 1.79l-0.414 3.728 3.728 -0.414c0.675 -0.075 1.308 -0.378 1.79 -0.859l0.633 -0.634L14.925 21.075l2.121 -2.121 2.121 2.121 2.121 -2.121 -2.121 -2.121 2.121 -2.121 2.123 2.121 2.121 -2.123 -2.121 -2.121L25.53 10.47l2.121 2.121 1.06 -1.06c1.171 -1.17 1.171 -3.071 0 -4.242 -1.17 -1.171 -3.071 -1.171 -4.242 0z" />
      </svg>
    </Icon>
  );
}
