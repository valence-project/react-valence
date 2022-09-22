import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _AlignCenter(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 6h27v3H4.5V6zm3 22.5h21v3H7.5v-3zm-3 -7.5h27v3H4.5v-3zm3 -7.5h21v3H7.5V13.5z" />
      </svg>
    </Icon>
  );
}
