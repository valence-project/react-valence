import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _RouteFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6 22.5V12.75a6.75 6.75 0 0 1 13.5 0v10.5a3.75 3.75 0 1 0 7.5 0V13.245a4.502 4.502 0 1 1 3 0v10.005a6.75 6.75 0 1 1 -13.5 0v-10.5a3.75 3.75 0 0 0 -7.5 0V22.5h4.5l-6 7.5 -6 -7.5h4.5z" />
      </svg>
    </Icon>
  );
}
