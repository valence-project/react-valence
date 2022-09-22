import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _NotificationBadgeFill(
  props: IconPropsWithoutChildren
) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M20.011 6A9 9 0 0 0 31.5 17.489V31.5a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V7.5a1.5 1.5 0 0 1 1.5 -1.5h14.011zM28.5 15a6 6 0 1 1 0 -12 6 6 0 0 1 0 12z" />
      </svg>
    </Icon>
  );
}
