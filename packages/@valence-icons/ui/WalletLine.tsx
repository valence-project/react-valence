import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _WalletLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M27 10.5h4.5a1.5 1.5 0 0 1 1.5 1.5v18a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5h22.5v6zM6 13.5v15h24V13.5H6zm0 -6v3h18V7.5H6zm16.5 12h4.5v3h-4.5v-3z" />
      </svg>
    </Icon>
  );
}
