import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _WalletFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M3 13.5h28.5a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V13.5zm1.5 -9h22.5v6H3V6a1.5 1.5 0 0 1 1.5 -1.5zm18 16.5v3h4.5v-3h-4.5z" />
      </svg>
    </Icon>
  );
}
