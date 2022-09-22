import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _DossierFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M25.5 3v3h4.5c0.828 0 1.5 0.672 1.5 1.5v24c0 0.828 -0.672 1.5 -1.5 1.5H6c-0.828 0 -1.5 -0.672 -1.5 -1.5V7.5c0 -0.828 0.672 -1.5 1.5 -1.5h4.5V3h15zm-6 13.5h-3v3H13.5v3h2.998L16.5 25.5h3l-0.002 -3H22.5v-3h-3v-3zm3 -10.5H13.5v3h9V6z" />
      </svg>
    </Icon>
  );
}
