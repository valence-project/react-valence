import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _Emphasis(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 28.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0 -4.5zm-8.25 0a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0 -4.5zm16.5 0a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0 -4.5zM27 4.5v3H12v6h13.5v3H12v6h15v3H9V4.5h18z" />
      </svg>
    </Icon>
  );
}
