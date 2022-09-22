import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _DeleteBackLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M9.803 4.5H31.5a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H9.803a1.5 1.5 0 0 1 -1.248 -0.667l-8 -12a1.5 1.5 0 0 1 0 -1.665l8 -12A1.5 1.5 0 0 1 9.803 4.5zm0.802 3l-6.999 10.5 6.999 10.5H30V7.5H10.605zM24 16.5v3H13.5v-3h10.5z" />
      </svg>
    </Icon>
  );
}
