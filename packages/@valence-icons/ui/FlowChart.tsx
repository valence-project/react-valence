import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FlowChart(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M9 32.25c-2.9 0 -5.25 -2.35 -5.25 -5.25s2.35 -5.25 5.25 -5.25c2.377 0 4.386 1.581 5.032 3.75H22.5v-3h3V13.863L22.136 10.5H13.5V13.5H4.5V4.5h9v3h8.636L27 2.634 33.364 9 28.5 13.861V22.5L31.5 22.5v9h-9v-3H14.033c-0.645 2.169 -2.655 3.75 -5.032 3.75zm0 -7.5c-1.242 0 -2.25 1.008 -2.25 2.25s1.008 2.25 2.25 2.25 2.25 -1.008 2.25 -2.25 -1.008 -2.25 -2.25 -2.25zm19.5 0.75h-3v3h3v-3zM27 6.879L24.879 9 27 11.121 29.121 9 27 6.879zM10.5 7.5H7.5v3h3V7.5z" />
      </svg>
    </Icon>
  );
}
