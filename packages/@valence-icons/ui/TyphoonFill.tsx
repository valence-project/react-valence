import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _TyphoonFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M26.481 2.55l-4.173 3.8a13.706 13.706 0 0 1 5.235 2.96c5.268 4.8 5.268 12.582 0 17.382 -3.888 3.54 -9.897 5.793 -18.024 6.759l4.173 -3.8a13.706 13.706 0 0 1 -5.235 -2.96c-5.268 -4.8 -5.3 -12.553 0 -17.382C12.345 5.769 18.355 3.516 26.483 2.55zM18 12c-3.728 0 -6.75 2.685 -6.75 6s3.022 6 6.75 6 6.75 -2.685 6.75 -6 -3.022 -6 -6.75 -6z" />
      </svg>
    </Icon>
  );
}
