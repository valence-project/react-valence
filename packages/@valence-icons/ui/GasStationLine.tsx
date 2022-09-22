import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _GasStationLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M21 28.5h1.5v3H3v-3h1.5V6a1.5 1.5 0 0 1 1.5 -1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v12h3a3 3 0 0 1 3 3v6a1.5 1.5 0 0 0 3 0v-10.5h-3a1.5 1.5 0 0 1 -1.5 -1.5V9.621l-2.486 -2.486 2.121 -2.121 7.425 7.425A1.496 1.496 0 0 1 33 13.5v13.5a4.5 4.5 0 0 1 -9 0v-6h-3v7.5zm-13.5 0h10.5v-9H7.5v9zM7.5 7.5v9h10.5V7.5H7.5z" />
      </svg>
    </Icon>
  );
}
