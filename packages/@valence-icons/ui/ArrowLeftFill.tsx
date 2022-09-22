import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ArrowLeftFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 19.5v10.5l-12 -12 12 -12v10.5h12v3z" />
      </svg>
    </Icon>
  );
}
