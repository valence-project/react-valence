import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _SubwayFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M25.8 30l2.7 2.25v0.75H7.5v-0.75L10.2 30H7.5a3 3 0 0 1 -3 -3V10.5a6 6 0 0 1 6 -6h15a6 6 0 0 1 6 6v16.5a3 3 0 0 1 -3 3h-2.7zM16.5 18V7.5H10.5a3 3 0 0 0 -3 3v7.5h9zm3 0h9V10.5a3 3 0 0 0 -3 -3h-6v10.5zm-8.25 9a2.25 2.25 0 1 0 0 -4.5 2.25 2.25 0 0 0 0 4.5zm13.5 0a2.25 2.25 0 1 0 0 -4.5 2.25 2.25 0 0 0 0 4.5z" />
      </svg>
    </Icon>
  );
}
