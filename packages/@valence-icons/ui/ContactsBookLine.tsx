import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ContactsBookLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 3h24.008C30.16 3 31.5 4.347 31.5 5.985v24.03c0 1.648 -1.34 2.985 -2.993 2.985H4.5V3zm6 3H7.5v24h3V6zm3 24h15V6H13.5v24zm3 -6a4.5 4.5 0 0 1 9 0h-9zm4.5 -6a3 3 0 1 1 0 -6 3 3 0 0 1 0 6zm12 -9h3v6h-3V9zm0 9h3v6h-3v-6z" />
      </svg>
    </Icon>
  );
}
