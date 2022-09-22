import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _RadioFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M25.5 15h4.5V9H6v6h16.5V12h3v3zM9 4.5V1.5h3v3h19.512c0.822 0 1.488 0.667 1.488 1.49v24.021a1.5 1.5 0 0 1 -1.488 1.49H4.488A1.49 1.49 0 0 1 3 30.011V5.989A1.5 1.5 0 0 1 4.488 4.5H9zm1.5 24a4.5 4.5 0 1 0 0 -9 4.5 4.5 0 0 0 0 9z" />
      </svg>
    </Icon>
  );
}
