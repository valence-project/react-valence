import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ParkingLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M9 4.5h10.5a9 9 0 1 1 0 18H12v9H9V4.5zm3 3v12h7.5a6 6 0 1 0 0 -12H12z" />
      </svg>
    </Icon>
  );
}
