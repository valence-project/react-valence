import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _QuestionLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 33C9.716 33 3 26.285 3 18S9.716 3 18 3s15 6.716 15 15 -6.716 15 -15 15zm0 -3a12 12 0 1 0 0 -24 12 12 0 0 0 0 24zm-1.5 -7.5h3v3h-3v-3zm3 -2.468V21h-3v-2.25a1.5 1.5 0 0 1 1.5 -1.5 2.25 2.25 0 1 0 -2.207 -2.691l-2.943 -0.59A5.252 5.252 0 1 1 19.5 20.032z" />
      </svg>
    </Icon>
  );
}
