import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _TextWrap(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M22.5 27h2.25a3.75 3.75 0 1 0 0 -7.5H4.5v-3h20.25a6.75 6.75 0 1 1 0 13.5H22.5v3l-6 -4.5 6 -4.5v3zM4.5 6h27v3H4.5V6zm9 21v3H4.5v-3h9z" />
      </svg>
    </Icon>
  );
}
