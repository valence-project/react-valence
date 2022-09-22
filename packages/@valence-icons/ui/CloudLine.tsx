import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CloudLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M25.5 31.5H10.5A9 9 0 0 1 7.512 14.009a10.5 10.5 0 1 1 20.976 0A9 9 0 0 1 25.5 31.5zm0 -18a7.5 7.5 0 1 0 -14.991 0.364l0.105 2.232 -2.106 0.741A6.003 6.003 0 0 0 10.5 28.5h15a6 6 0 1 0 -5.694 -7.897l-2.847 -0.95A9.005 9.005 0 0 1 25.5 13.5z" />
      </svg>
    </Icon>
  );
}
