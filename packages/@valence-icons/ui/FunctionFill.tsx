import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FunctionFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 4.5h12v12H4.5V4.5zm0 15h12v12H4.5v-12zM19.5 4.5h12v12h-12V4.5zm0 15h12v12h-12v-12z" />
      </svg>
    </Icon>
  );
}
