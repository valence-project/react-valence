import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _HomeWifiLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M9 28.5h18V13.736l-9 -8.181 -9 8.181V28.5zm19.5 3H7.5a1.5 1.5 0 0 1 -1.5 -1.5v-13.5H1.5l15.491 -14.082a1.5 1.5 0 0 1 2.019 0L34.5 16.5h-4.5v13.5a1.5 1.5 0 0 1 -1.5 1.5zM12 15a10.5 10.5 0 0 1 10.5 10.5h-3a7.5 7.5 0 0 0 -7.5 -7.5v-3zm0 6a4.5 4.5 0 0 1 4.5 4.5H12v-4.5z" />
      </svg>
    </Icon>
  );
}
