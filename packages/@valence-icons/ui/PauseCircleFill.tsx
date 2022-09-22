import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _PauseCircleFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 33C9.716 33 3 26.285 3 18S9.716 3 18 3s15 6.716 15 15 -6.716 15 -15 15zM13.5 13.5v9h3V13.5H13.5zm6 0v9h3V13.5h-3z" />
      </svg>
    </Icon>
  );
}
