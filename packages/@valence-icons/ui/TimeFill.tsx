import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _TimeFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 33C9.716 33 3 26.285 3 18S9.716 3 18 3s15 6.716 15 15 -6.716 15 -15 15zm1.5 -15V10.5h-3v10.5h9v-3h-6z" />
      </svg>
    </Icon>
  );
}
