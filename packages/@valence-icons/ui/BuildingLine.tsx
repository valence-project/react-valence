import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _BuildingLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M31.5 28.5h3v3H1.5v-3h3V6a1.5 1.5 0 0 1 1.5 -1.5h15a1.5 1.5 0 0 1 1.5 1.5v22.5h6v-12h-3V13.5h4.5a1.5 1.5 0 0 1 1.5 1.5v13.5zM7.5 7.5v21h12V7.5H7.5zm3 9h6v3H10.5v-3zm0 -6h6v3H10.5V10.5z" />
      </svg>
    </Icon>
  );
}
