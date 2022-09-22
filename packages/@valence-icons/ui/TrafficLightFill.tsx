import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _TrafficLightFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M10.5 6V4.5a1.5 1.5 0 0 1 1.5 -1.5h12a1.5 1.5 0 0 1 1.5 1.5v1.5h4.5c0 3.75 -3.75 5.25 -4.5 5.25V15h4.5c0 3.75 -3.75 5.25 -4.5 5.25V24h4.5c0 3.75 -3.75 5.25 -4.5 5.25V31.5a1.5 1.5 0 0 1 -1.5 1.5H12a1.5 1.5 0 0 1 -1.5 -1.5v-2.25c-0.75 0 -4.5 -1.5 -4.5 -5.25h4.5v-3.75c-0.75 0 -4.5 -1.5 -4.5 -5.25h4.5V11.25c-0.75 0 -4.5 -1.5 -4.5 -5.25h4.5zm7.5 24a3 3 0 1 0 0 -6 3 3 0 0 0 0 6zm0 -9a3 3 0 1 0 0 -6 3 3 0 0 0 0 6zm0 -9a3 3 0 1 0 0 -6 3 3 0 0 0 0 6z" />
      </svg>
    </Icon>
  );
}
