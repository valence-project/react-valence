import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CheckDoubleFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M17.403 20.64l2.118 2.118 12.699 -12.699 2.121 2.121 -14.82 14.82 -9.546 -9.546 2.121 -2.121 3.188 3.188 2.119 2.118zm0.003 -4.242l7.428 -7.43 2.115 2.115 -7.428 7.43 -2.115 -2.115zm-4.24 8.482L11.046 27 1.5 17.454l2.121 -2.121 2.119 2.119 -0.002 0.002 7.426 7.426z" />
      </svg>
    </Icon>
  );
}
