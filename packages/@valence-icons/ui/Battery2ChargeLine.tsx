import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _Battery2ChargeLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M19.5 18h4.5l-7.5 10.5v-7.5H12l7.5 -10.5v7.5zm-3 -9H10.5v21h15V9h-6V6h-3v3zM13.5 6V4.5a1.5 1.5 0 0 1 1.5 -1.5h6a1.5 1.5 0 0 1 1.5 1.5v1.5h4.5a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H9a1.5 1.5 0 0 1 -1.5 -1.5V7.5a1.5 1.5 0 0 1 1.5 -1.5h4.5z" />
      </svg>
    </Icon>
  );
}
