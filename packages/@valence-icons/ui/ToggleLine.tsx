import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ToggleLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M12 10.5a7.5 7.5 0 1 0 0 15h12a7.5 7.5 0 0 0 0 -15H12zm0 -3h12a10.5 10.5 0 0 1 0 21H12A10.5 10.5 0 0 1 12 7.5zm0 15a4.5 4.5 0 1 1 0 -9 4.5 4.5 0 0 1 0 9z" />
      </svg>
    </Icon>
  );
}
