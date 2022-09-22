import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _SpeedLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 20l-13.835 9.223A0.75 0.75 0 0 1 3 28.599V7.401a0.75 0.75 0 0 1 1.165 -0.624L18 16V7.401a0.75 0.75 0 0 1 1.165 -0.624l15.899 10.599a0.75 0.75 0 0 1 0 1.248l-15.899 10.599a0.75 0.75 0 0 1 -1.165 -0.624v-8.599zM15.591 18L6 11.605v12.789L15.591 18zM21 11.605v12.789L30.591 18 21 11.605z" />
      </svg>
    </Icon>
  );
}
