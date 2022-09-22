import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ToggleFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M12 7.5h12a10.5 10.5 0 0 1 0 21H12A10.5 10.5 0 0 1 12 7.5zm12 15a4.5 4.5 0 1 0 0 -9 4.5 4.5 0 0 0 0 9z" />
      </svg>
    </Icon>
  );
}
