import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ChatPollLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M31.5 4.5c0.828 0 1.5 0.672 1.5 1.5v21c0 0.828 -0.672 1.5 -1.5 1.5H9.683L3 33.75V6c0 -0.828 0.672 -1.5 1.5 -1.5h27zm-1.5 3H6v20.078L8.645 25.5H30V7.5zm-10.5 3v12h-3V10.5h3zm6 3v9h-3V13.5h3zm-12 3v6H10.5v-6h3z" />
      </svg>
    </Icon>
  );
}
