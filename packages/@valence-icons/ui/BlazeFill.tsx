import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _BlazeFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M27.75 13.5c1.5 1.59 2.25 3.591 2.25 6 0 5.199 -5.55 6.414 -8.25 13.5 -1.001 -0.862 -1.5 -2.112 -1.5 -3.75 0 -5.223 7.5 -7.935 7.5 -15.75zm-6 -6c1.8 1.857 2.7 3.858 2.7 6 0 7.426 -9.067 8.538 -7.2 19.5C14.75 31.26 13.5 28.759 13.5 25.5c0 -4.988 8.25 -9 8.25 -18zM15 1.5c1.999 2.501 3 4.75 3 6.75 0 9.375 -12.75 12.333 -6 24.75 -3.924 -0.87 -6.75 -4.5 -6.75 -9C5.25 14.25 15 12.75 15 1.5z" />
      </svg>
    </Icon>
  );
}
