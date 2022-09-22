import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _AlarmLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 33a13.5 13.5 0 1 1 0 -27 13.5 13.5 0 0 1 0 27zm0 -3a10.5 10.5 0 1 0 0 -21 10.5 10.5 0 0 0 0 21zm1.5 -10.5h4.5v3h-7.5V12h3v7.5zM2.621 9.423l5.303 -5.303 2.123 2.121L4.74 11.546 2.621 9.423zm25.455 -5.303l5.304 5.303 -2.121 2.123 -5.304 -5.304 2.123 -2.121z" />
      </svg>
    </Icon>
  );
}
