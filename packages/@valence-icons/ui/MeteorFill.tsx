import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _MeteorFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M31.5 1.5v18A13.5 13.5 0 1 1 11.063 7.917L21 2.179v4.155L31.5 1.5zm-13.5 10.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0 -15z" />
      </svg>
    </Icon>
  );
}
