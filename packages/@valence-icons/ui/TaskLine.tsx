import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _TaskLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M31.5 4.488v27.024a1.5 1.5 0 0 1 -1.49 1.488H5.989A1.49 1.49 0 0 1 4.5 31.512V4.488A1.5 1.5 0 0 1 5.989 3h24.021c0.822 0 1.49 0.666 1.49 1.488zM28.5 6H7.5v24h21V6zm-11.56 13.681l6.365 -6.363 2.121 2.121 -8.486 8.486 -5.835 -5.835 2.123 -2.121 3.713 3.713z" />
      </svg>
    </Icon>
  );
}
