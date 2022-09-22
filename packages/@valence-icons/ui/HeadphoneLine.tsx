import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _HeadphoneLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 6a12 12 0 0 0 -12 12h4.5a3 3 0 0 1 3 3v7.5a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3v-10.5C3 9.716 9.716 3 18 3s15 6.716 15 15v10.5a3 3 0 0 1 -3 3h-4.5a3 3 0 0 1 -3 -3v-7.5a3 3 0 0 1 3 -3h4.5a12 12 0 0 0 -12 -12zM6 21v7.5h4.5v-7.5H6zm19.5 0v7.5h4.5v-7.5h-4.5z" />
      </svg>
    </Icon>
  );
}
