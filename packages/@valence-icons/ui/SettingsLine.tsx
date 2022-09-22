import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _SettingsLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 1.5l14.25 8.25v16.5L18 34.5l-14.25 -8.25v-16.5L18 1.5zm0 3.466L6.75 11.479v13.041l11.25 6.513 11.25 -6.513V11.479L18 4.966zM18 24a6 6 0 1 1 0 -12 6 6 0 0 1 0 12zm0 -3a3 3 0 1 0 0 -6 3 3 0 0 0 0 6z" />
      </svg>
    </Icon>
  );
}
