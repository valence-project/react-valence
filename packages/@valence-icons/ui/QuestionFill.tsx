import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _QuestionFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 33C9.716 33 3 26.285 3 18S9.716 3 18 3s15 6.716 15 15 -6.716 15 -15 15zm-1.5 -10.5v3h3v-3h-3zm3 -2.468A5.253 5.253 0 0 0 18 9.75a5.252 5.252 0 0 0 -5.149 4.22l2.943 0.59A2.25 2.25 0 1 1 18 17.25a1.5 1.5 0 0 0 -1.5 1.5V21h3v-0.968z" />
      </svg>
    </Icon>
  );
}
