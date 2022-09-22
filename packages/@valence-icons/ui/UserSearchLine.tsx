import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _UserSearchLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 21v3a9 9 0 0 0 -9 9H6a12 12 0 0 1 12 -12zm0 -1.5c-4.973 0 -9 -4.027 -9 -9s4.027 -9 9 -9 9 4.027 9 9 -4.027 9 -9 9zm0 -3c3.315 0 6 -2.685 6 -6s-2.685 -6 -6 -6 -6 2.685 -6 6 2.685 6 6 6zm14.169 13.548l2.256 2.256 -2.121 2.121 -2.256 -2.256a6 6 0 1 1 2.121 -2.121zM27 30a3 3 0 1 0 0 -6 3 3 0 0 0 0 6z" />
      </svg>
    </Icon>
  );
}
