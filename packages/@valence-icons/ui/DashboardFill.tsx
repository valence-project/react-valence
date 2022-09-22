import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _DashboardFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 19.5h12V4.5H4.5v15zm0 12h12v-9H4.5v9zm15 0h12V16.5h-12v15zm0 -27v9h12V4.5h-12z" />
      </svg>
    </Icon>
  );
}
