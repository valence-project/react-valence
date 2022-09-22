import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FilePaperLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M25.5 25.5v3a1.5 1.5 0 0 0 3 0V6H7.5v16.5H4.5V4.5a1.5 1.5 0 0 1 1.5 -1.5h24a1.5 1.5 0 0 1 1.5 1.5v24a4.5 4.5 0 0 1 -4.5 4.5H6a4.5 4.5 0 0 1 -4.5 -4.5v-3h24z" />
      </svg>
    </Icon>
  );
}
