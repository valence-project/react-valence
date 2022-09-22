import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _SignalWifiErrorLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 4.5c6.426 0 12.33 2.246 16.965 5.994l-1.885 2.334C28.959 9.497 23.712 7.5 18 7.5c-4.633 0 -8.96 1.313 -12.629 3.588L18 26.726l9 -11.143v4.774L18 31.5 1.035 10.495C5.67 6.745 11.571 4.5 18 4.5zm15 24v3h-3v-3h3zm0 -13.5v10.5h-3v-10.5h3z" />
      </svg>
    </Icon>
  );
}
