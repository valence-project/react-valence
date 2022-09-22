import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ContactsLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M28.5 10.5h7.5v3h-7.5V10.5zm-3 7.5h10.5v3h-10.5v-3zm4.5 7.5h6v3h-6v-3zM3 33a12 12 0 1 1 24 0h-3a9 9 0 1 0 -18 0H3zm12 -13.5c-4.973 0 -9 -4.027 -9 -9s4.027 -9 9 -9 9 4.027 9 9 -4.027 9 -9 9zm0 -3c3.315 0 6 -2.685 6 -6s-2.685 -6 -6 -6 -6 2.685 -6 6 2.685 6 6 6z" />
      </svg>
    </Icon>
  );
}
