import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _HotelLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M33 31.5H3v-3h1.5V6a1.5 1.5 0 0 1 1.5 -1.5h21a1.5 1.5 0 0 1 1.5 1.5v7.5h3v15h1.5v3zm-7.5 -3h3v-12h-9v12h3v-9h3v9zm0 -15V7.5H7.5v21h9V13.5h9zM10.5 16.5h3v3H10.5v-3zm0 6h3v3H10.5v-3zm0 -12h3v3H10.5V10.5z" />
      </svg>
    </Icon>
  );
}
