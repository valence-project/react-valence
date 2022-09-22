import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _Heading(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M25.5 16.5V6h3v25.5h-3v-12H10.5v12H7.5V6h3v10.5z" />
      </svg>
    </Icon>
  );
}
