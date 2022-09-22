import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _StarFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 27.39l-10.579 5.922 2.362 -11.892L0.88 13.188l12.04 -1.428L18 0.75l5.079 11.01 12.04 1.428 -8.902 8.232 2.362 11.892z" />
      </svg>
    </Icon>
  );
}
