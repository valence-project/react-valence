import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _SensorFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M9 12v3h18V12h-4.5V3h3v6h7.5v3h-3v18a1.5 1.5 0 0 1 -1.5 1.5H7.5a1.5 1.5 0 0 1 -1.5 -1.5V12H3V9h7.5V3h3v9H9zm10.5 -9v9h-3V3h3z" />
      </svg>
    </Icon>
  );
}
