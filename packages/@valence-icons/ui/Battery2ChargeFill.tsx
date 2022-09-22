import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _Battery2ChargeFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M13.5 6V4.5a1.5 1.5 0 0 1 1.5 -1.5h6a1.5 1.5 0 0 1 1.5 1.5v1.5h4.5a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H9a1.5 1.5 0 0 1 -1.5 -1.5V7.5a1.5 1.5 0 0 1 1.5 -1.5h4.5zm6 12V10.5l-7.5 10.5h4.5v7.5l7.5 -10.5h-4.5z" />
      </svg>
    </Icon>
  );
}
