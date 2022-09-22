import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CollageFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M16.784 19.736L18.855 31.5 6 31.5c-0.828 0 -1.5 -0.672 -1.5 -1.5v-8.097l12.284 -2.167zM30 4.5c0.828 0 1.5 0.672 1.5 1.5v24c0 0.828 -0.672 1.5 -1.5 1.5h-8.097L17.142 4.5H30zM14.096 4.5l2.166 12.282L4.5 18.855 4.5 6c0 -0.828 0.672 -1.5 1.5 -1.5h8.096z" />
      </svg>
    </Icon>
  );
}
