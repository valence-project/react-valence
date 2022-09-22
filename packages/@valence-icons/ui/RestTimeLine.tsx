import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _RestTimeLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M16.5 9v3c-4.971 0 -9 4.029 -9 9s4.029 9 9 9c4.857 0 8.817 -3.849 8.994 -8.663L25.5 21h3c0 6.627 -5.373 12 -12 12s-12 -5.373 -12 -12c0 -6.502 5.37 -12 12 -12zm15 -6v3l-7.99 9H31.5v3h-12v-3l7.989 -9H19.5V3h12z" />
      </svg>
    </Icon>
  );
}
