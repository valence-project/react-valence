import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _TyphoonLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M26.481 2.55l-4.173 3.8a13.706 13.706 0 0 1 5.235 2.96c5.268 4.8 5.268 12.582 0 17.382 -3.888 3.54 -9.897 5.793 -18.024 6.759l4.173 -3.8a13.706 13.706 0 0 1 -5.235 -2.96c-5.268 -4.8 -5.3 -12.553 0 -17.382C12.345 5.769 18.355 3.516 26.483 2.55zM18 9c-5.799 0 -10.5 4.029 -10.5 9s4.701 9 10.5 9 10.5 -4.029 10.5 -9 -4.701 -9 -10.5 -9zm0 3.45c3.315 0 6 2.486 6 5.55s-2.685 5.55 -6 5.55 -6 -2.486 -6 -5.55 2.685 -5.55 6 -5.55zm0 3c-1.707 0 -3 1.196 -3 2.55 0 1.355 1.293 2.55 3 2.55s3 -1.196 3 -2.55c0 -1.355 -1.293 -2.55 -3 -2.55z" />
      </svg>
    </Icon>
  );
}
