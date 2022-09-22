import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _UnsplashFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M12.75 16.5v7.5h10.5v-7.5H31.5v15H4.5V16.5h8.25zm10.5 -12v7.5h-10.5V4.5h10.5z" />
      </svg>
    </Icon>
  );
}
