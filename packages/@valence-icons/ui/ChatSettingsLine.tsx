import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ChatSettingsLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M33 18h-3V7.5H6v20.078L8.645 25.5H18v3H9.683L3 33.75V6a1.5 1.5 0 0 1 1.5 -1.5h27a1.5 1.5 0 0 1 1.5 1.5v12zm-11.783 10.607a6.006 6.006 0 0 1 0 -3.213l-1.462 -0.844 1.5 -2.598 1.464 0.844A5.994 5.994 0 0 1 25.5 21.189V19.5h3v1.689c1.073 0.276 2.03 0.84 2.781 1.607l1.464 -0.844 1.5 2.598 -1.462 0.844a6.006 6.006 0 0 1 0 3.213l1.462 0.844 -1.5 2.598 -1.464 -0.844c-0.752 0.765 -1.71 1.331 -2.781 1.607V34.5h-3v-1.689a5.994 5.994 0 0 1 -2.781 -1.607l-1.464 0.844 -1.5 -2.598 1.462 -0.844zM27 30a3 3 0 1 0 0 -6 3 3 0 0 0 0 6z" />
      </svg>
    </Icon>
  );
}
