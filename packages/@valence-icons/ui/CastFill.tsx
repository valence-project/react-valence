import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CastFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5h-9a19.65 19.65 0 0 0 -0.229 -3H30V7.5H6v4.729A19.65 19.65 0 0 0 3 12V6a1.5 1.5 0 0 1 1.5 -1.5zm15 27h-3a13.5 13.5 0 0 0 -13.5 -13.5v-3c9.113 0 16.5 7.387 16.5 16.5zm-6 0H10.5a7.5 7.5 0 0 0 -7.5 -7.5v-3a10.5 10.5 0 0 1 10.5 10.5zm-6 0H3v-4.5a4.5 4.5 0 0 1 4.5 4.5zm14.059 -6A19.548 19.548 0 0 0 9 12.941V10.5h18v15h-5.441z" />
      </svg>
    </Icon>
  );
}
