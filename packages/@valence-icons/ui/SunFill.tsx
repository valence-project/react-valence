import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _SunFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 27a9 9 0 1 1 0 -18 9 9 0 0 1 0 18zM16.5 1.5h3v4.5h-3V1.5zm0 28.5h3v4.5h-3v-4.5zM5.272 7.394l2.121 -2.121L10.575 8.454 8.454 10.575 5.272 7.395zM25.425 27.546l2.121 -2.121 3.181 3.181 -2.121 2.121 -3.181 -3.181zm3.181 -22.275l2.121 2.123 -3.181 3.181 -2.121 -2.121 3.181 -3.181zM8.454 25.425l2.121 2.121 -3.181 3.181 -2.121 -2.121 3.181 -3.181zM34.5 16.5v3h-4.5v-3h4.5zM6 16.5v3H1.5v-3h4.5z" />
      </svg>
    </Icon>
  );
}
