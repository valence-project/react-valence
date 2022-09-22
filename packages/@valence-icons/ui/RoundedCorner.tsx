import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _RoundedCorner(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M31.5 28.5v3h-3v-3h3zm-6 0v3h-3v-3h3zm-6 0v3h-3v-3h3zm-6 0v3H10.5v-3h3zm-6 0v3H4.5v-3h3zm24 -6v3h-3v-3h3zM7.5 22.5v3H4.5v-3h3zm0 -6v3H4.5v-3h3zm16.5 -12c4.03 0 7.323 3.186 7.492 7.175L31.5 12v7.5h-3V12c0 -2.386 -1.882 -4.354 -4.236 -4.492L24 7.5h-7.5V4.5h7.5zM7.5 10.5v3H4.5V10.5h3zm0 -6v3H4.5V4.5h3zm6 0v3H10.5V4.5h3z" />
      </svg>
    </Icon>
  );
}
