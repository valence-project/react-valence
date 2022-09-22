import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _NotificationBadgeLine(
  props: IconPropsWithoutChildren
) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M20.011 6A8.985 8.985 0 0 0 19.5 9H7.5v21h21v-12a8.985 8.985 0 0 0 3 -0.512V31.5a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V7.5a1.5 1.5 0 0 1 1.5 -1.5h14.011zM28.5 12a3 3 0 1 0 0 -6 3 3 0 0 0 0 6zm0 3a6 6 0 1 1 0 -12 6 6 0 0 1 0 12z" />
      </svg>
    </Icon>
  );
}
