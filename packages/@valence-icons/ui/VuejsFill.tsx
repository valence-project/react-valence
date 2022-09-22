import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _VuejsFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M1.5 4.5h6l10.5 18 10.5 -18h6L18 33 1.5 4.5zm13 0L18 10.5l3.5 -6h6.053L18 21 8.448 4.5h6.053z" />
      </svg>
    </Icon>
  );
}
