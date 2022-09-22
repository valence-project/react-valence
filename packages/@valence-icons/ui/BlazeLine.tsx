import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _BlazeLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M28.5 13.5c1.001 1.59 1.5 3.591 1.5 6 0 4.5 -5.25 6 -7.5 13.5 -1.001 -0.862 -1.5 -2.112 -1.5 -3.75 0 -5.223 7.5 -7.935 7.5 -15.75zm-6.75 -6a12.465 12.465 0 0 1 1.5 6c0 7.5 -9 9 -6 19.5C14.75 31.26 13.5 28.759 13.5 25.5c0 -4.988 8.25 -9 8.25 -18zM15 1.5c1.001 1.999 1.5 4.25 1.5 6.75 0 9 -13.5 11.25 -4.5 24.75 -3.75 -0.75 -6.75 -4.5 -6.75 -9C5.25 14.25 15 12.75 15 1.5z" />
      </svg>
    </Icon>
  );
}
