import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ShieldCheckLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 1.5l12.326 2.739c0.685 0.153 1.175 0.76 1.175 1.464v14.98c0 3.009 -1.504 5.82 -4.008 7.488L18 34.5l-9.492 -6.329C6.003 26.502 4.5 23.692 4.5 20.685V5.703c0 -0.704 0.489 -1.311 1.175 -1.464L18 1.5zm0 3.074L7.5 6.906v13.777c0 2.006 1.002 3.879 2.671 4.992L18 30.896l7.829 -5.22C27.498 24.563 28.5 22.691 28.5 20.685V6.906L18 4.575zm6.678 7.76l2.123 2.121L17.255 24 10.89 17.636l2.121 -2.121 4.242 4.242 7.425 -7.425z" />
      </svg>
    </Icon>
  );
}
