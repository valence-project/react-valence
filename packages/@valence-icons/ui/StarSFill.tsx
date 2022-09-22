import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _StarSFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 25.5l-8.817 5.385 2.397 -10.05 -7.845 -6.72 10.297 -0.825L18 3.75l3.968 9.54 10.299 0.825 -7.846 6.72 2.397 10.05z" />
      </svg>
    </Icon>
  );
}
