import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _DownloadLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 28.5h27v3H4.5v-3zm15 -8.742L28.607 10.65l2.121 2.121L18 25.5 5.272 12.773 7.394 10.65 16.5 19.755V3h3v16.758z" />
      </svg>
    </Icon>
  );
}
