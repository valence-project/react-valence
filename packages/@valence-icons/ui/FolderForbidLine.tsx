import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FolderForbidLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M33 16.883a10.458 10.458 0 0 0 -3 -1.448V10.5h-12.621l-3 -3H6v21h10.935c0.323 1.083 0.815 2.094 1.448 3H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5h11.121l3 3H31.5a1.5 1.5 0 0 1 1.5 1.5v7.883zM27 33a7.5 7.5 0 1 1 0 -15 7.5 7.5 0 0 1 0 15zm-1.939 -3.438a4.5 4.5 0 0 0 6.002 -6.002l-6.002 6zm-2.123 -2.123l6.002 -6a4.5 4.5 0 0 0 -6.002 6.002z" />
      </svg>
    </Icon>
  );
}
