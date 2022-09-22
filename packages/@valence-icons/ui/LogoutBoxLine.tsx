import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _LogoutBoxLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6 27h3v3h18V6H9v3H6V4.5a1.5 1.5 0 0 1 1.5 -1.5h21a1.5 1.5 0 0 1 1.5 1.5v27a1.5 1.5 0 0 1 -1.5 1.5H7.5a1.5 1.5 0 0 1 -1.5 -1.5v-4.5zm3 -10.5h10.5v3H9v4.5l-7.5 -6 7.5 -6v4.5z" />
      </svg>
    </Icon>
  );
}
