import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ShieldCrossLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M5.675 4.239L18 1.5l12.326 2.739a1.5 1.5 0 0 1 1.175 1.464v14.98a9 9 0 0 1 -4.008 7.488L18 34.5l-9.492 -6.329A9 9 0 0 1 4.5 20.685V5.703a1.5 1.5 0 0 1 1.175 -1.464zM7.5 6.906v13.777a6 6 0 0 0 2.671 4.992L18 30.896l7.829 -5.22A6 6 0 0 0 28.5 20.685V6.906L18 4.575 7.5 6.906zM16.5 15V10.5h3v4.5h4.5v3h-4.5v4.5h-3v-4.5H12v-3h4.5z" />
      </svg>
    </Icon>
  );
}
