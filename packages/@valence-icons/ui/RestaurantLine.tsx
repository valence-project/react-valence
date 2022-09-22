import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _RestaurantLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M31.5 3v30h-3v-10.5h-6V12a9 9 0 0 1 9 -9zm-3 3.795C27.255 7.5 25.5 9.255 25.5 12v7.5h3V6.795zM13.5 20.85V33H10.5v-12.15A7.503 7.503 0 0 1 4.5 13.5V4.5h3v10.5h3V4.5h3v10.5h3V4.5h3v9a7.503 7.503 0 0 1 -6 7.35z" />
      </svg>
    </Icon>
  );
}
