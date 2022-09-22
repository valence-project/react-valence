import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CheckboxCircleFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 33C9.716 33 3 26.285 3 18S9.716 3 18 3s15 6.716 15 15 -6.716 15 -15 15zm-1.496 -9l10.605 -10.607 -2.121 -2.121 -8.484 8.486 -4.244 -4.244 -2.121 2.121L16.505 24z" />
      </svg>
    </Icon>
  );
}
