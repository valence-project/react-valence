import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _NotificationFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 3c7.455 0 13.5 6.065 13.5 13.547V30H4.5v-13.453C4.5 9.065 10.545 3 18 3zM14.25 31.5h7.5a3.75 3.75 0 1 1 -7.5 0z" />
      </svg>
    </Icon>
  );
}
