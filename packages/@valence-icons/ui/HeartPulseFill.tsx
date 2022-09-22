import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _HeartPulseFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M24.75 4.5C29.307 4.5 33 8.25 33 13.5c0 10.5 -11.25 16.5 -15 18.75 -2.967 -1.78 -10.626 -5.905 -13.698 -12.75h7.047l1.401 -2.334 4.5 7.5L20.349 19.5H25.5v-3h-6.849l-1.401 2.334 -4.5 -7.5L9.651 16.5H3.315C3.111 15.544 3 14.544 3 13.5c0 -5.25 3.75 -9 8.25 -9C14.04 4.5 16.5 6 18 7.5c1.5 -1.5 3.96 -3 6.75 -3z" />
      </svg>
    </Icon>
  );
}
