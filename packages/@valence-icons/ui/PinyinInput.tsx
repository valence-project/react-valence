import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _PinyinInput(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M26.901 4.554l2.598 1.5L27.796 9H31.5v3h-3v6h3v3h-3v10.5h-3v-10.5h-4.626c-0.488 4.293 -2.346 8.091 -5.055 10.79l-2.343 -1.905c2.28 -2.157 3.894 -5.283 4.375 -8.883L15 21v-3l3 -0.002V12h-3V9h3.7l-1.7 -2.946 2.598 -1.5L22.165 9h2.166l2.57 -4.446zM7.5 20.705l-3 0.804v-3.107l3 -0.804V12H4.5V9h3V4.5h3v4.5h3v3H10.5v4.796l3 -0.804v3.105l-3 0.804V27.75A3.75 3.75 0 0 1 6.75 31.5H4.5v-3h2.25a0.75 0.75 0 0 0 0.738 -0.615L7.5 27.75v-7.046zM25.5 12h-4.5v6h4.5V12z" />
      </svg>
    </Icon>
  );
}
