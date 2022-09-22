import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _BrushFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M19.933 9.324l7.409 -5.761a1.5 1.5 0 0 1 1.98 0.123l4.492 4.491a1.5 1.5 0 0 1 0.123 1.982l-5.76 7.407a11.258 11.258 0 0 1 -10.925 13.938C12 31.503 5.25 29.25 1.5 27c5.97 -4.5 4.571 -7.215 5.25 -9.75 1.587 -5.925 7.263 -9.386 13.183 -7.926zm5.119 2.819c0.098 0.095 0.195 0.192 0.289 0.291l1.703 1.701 3.713 -4.773 -2.619 -2.619 -4.773 3.713 1.688 1.688z" />
      </svg>
    </Icon>
  );
}
