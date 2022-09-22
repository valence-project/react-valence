import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _DashboardLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M19.5 31.5V16.5h12v15h-12zM4.5 19.5V4.5h12v15H4.5zm9 -3V7.5H7.5v9h6zM4.5 31.5v-9h12v9H4.5zm3 -3h6v-3H7.5v3zm15 0h6v-9h-6v9zM19.5 4.5h12v9h-12V4.5zm3 3v3h6V7.5h-6z" />
      </svg>
    </Icon>
  );
}
