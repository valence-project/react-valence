import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _DossierLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M25.5 3v3h4.5c0.828 0 1.5 0.672 1.5 1.5v24c0 0.828 -0.672 1.5 -1.5 1.5H6c-0.828 0 -1.5 -0.672 -1.5 -1.5V7.5c0 -0.828 0.672 -1.5 1.5 -1.5h4.5V3h15zM10.5 9H7.5v21h21V9h-3v3H10.5V9zm9 7.5v3h3v3h-3.002L19.5 25.5h-3l-0.002 -3H13.5v-3h3v-3h3zm3 -10.5H13.5v3h9V6z" />
      </svg>
    </Icon>
  );
}
