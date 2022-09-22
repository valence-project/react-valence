import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _TrainLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M25.8 30l2.7 2.25v0.75H7.5v-0.75L10.2 30H7.5a3 3 0 0 1 -3 -3V10.5a6 6 0 0 1 6 -6h15a6 6 0 0 1 6 6v16.5a3 3 0 0 1 -3 3h-2.7zM10.5 7.5a3 3 0 0 0 -3 3v16.5h21V10.5a3 3 0 0 0 -3 -3H10.5zm7.5 18a3 3 0 1 1 0 -6 3 3 0 0 1 0 6zM9 10.5h18v6H9V10.5z" />
      </svg>
    </Icon>
  );
}
