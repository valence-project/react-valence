import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _AdminLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 21v3a9 9 0 0 0 -9 9H6a12 12 0 0 1 12 -12zm0 -1.5c-4.973 0 -9 -4.027 -9 -9s4.027 -9 9 -9 9 4.027 9 9 -4.027 9 -9 9zm0 -3c3.315 0 6 -2.685 6 -6s-2.685 -6 -6 -6 -6 2.685 -6 6 2.685 6 6 6zm13.5 9h1.5v7.5h-12v-7.5h1.5v-1.5a4.5 4.5 0 0 1 9 0v1.5zm-3 0v-1.5a1.5 1.5 0 0 0 -3 0v1.5h3z" />
      </svg>
    </Icon>
  );
}
