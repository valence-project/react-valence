import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _LeafLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M31.5 4.5v3c0 14.441 -8.059 21 -18 21H7.865C7.62 29.868 7.5 31.361 7.5 33H4.5c0 -2.045 0.174 -3.9 0.519 -5.598C4.674 25.461 4.5 22.827 4.5 19.5 4.5 11.216 11.216 4.5 19.5 4.5c3 0 6 1.5 12 0zm-12 3c-6.627 0 -12 5.373 -12 12 0 0.543 0.005 1.067 0.015 1.569 1.881 -2.967 4.636 -5.311 8.241 -7.371l1.488 2.604C12.962 18.75 10.12 21.531 8.664 25.5H13.5c9.022 0 14.806 -5.96 14.995 -17.418 -2.058 0.2 -3.97 0.072 -6.33 -0.282C20.441 7.54 20.102 7.5 19.5 7.5z" />
      </svg>
    </Icon>
  );
}
