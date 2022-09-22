import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _GpsFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 24l4.5 9H13.5l4.5 -9zm-3.94 0.383a7.5 7.5 0 1 1 7.883 0l-2.034 -4.066a3 3 0 1 0 -3.816 0l-2.032 4.065zm-3.362 6.723A14.995 14.995 0 0 1 3 18C3 9.716 9.716 3 18 3s15 6.716 15 15a14.995 14.995 0 0 1 -7.698 13.105l-2.014 -4.032a10.5 10.5 0 1 0 -10.575 0l-2.014 4.032z" />
      </svg>
    </Icon>
  );
}
