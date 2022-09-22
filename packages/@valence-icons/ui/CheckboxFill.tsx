import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CheckboxFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6 4.5h24a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm10.505 19.5l10.605 -10.607 -2.121 -2.121 -8.484 8.486 -4.244 -4.244 -2.121 2.121L16.505 24z" />
      </svg>
    </Icon>
  );
}
