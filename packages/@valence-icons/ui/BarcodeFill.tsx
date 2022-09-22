import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _BarcodeFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M3 6h3v24H3V6zm6 0h3v24H9V6zm4.5 0h4.5v24H13.5V6zm6 0h3v24h-3V6zm4.5 0h3v24h-3V6zm4.5 0h4.5v24h-4.5V6z" />
      </svg>
    </Icon>
  );
}
