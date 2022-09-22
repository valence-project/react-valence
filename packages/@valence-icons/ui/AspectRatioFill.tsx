import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _AspectRatioFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M31.5 4.5a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5h27zm-4.5 13.5h-3v4.5h-4.5v3h7.5v-7.5zm-10.5 -7.5H9v7.5h3V13.5h4.5V10.5z" />
      </svg>
    </Icon>
  );
}
