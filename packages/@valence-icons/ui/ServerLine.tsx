import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ServerLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M7.5 16.5h21V7.5H7.5v9zm24 -10.5v24a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5h24a1.5 1.5 0 0 1 1.5 1.5zm-3 13.5H7.5v9h21v-9zM10.5 22.5h4.5v3H10.5v-3zm0 -12h4.5v3H10.5V10.5z" />
      </svg>
    </Icon>
  );
}
