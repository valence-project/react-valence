import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _Text(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M19.5 9v22.5h-3V9H7.5V6h21v3z" />
      </svg>
    </Icon>
  );
}
