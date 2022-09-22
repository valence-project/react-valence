import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FileForbidLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M16.935 30c0.323 1.083 0.815 2.094 1.448 3H5.989A1.5 1.5 0 0 1 4.5 31.512V4.488C4.5 3.666 5.171 3 5.998 3H24l7.5 7.5v7.011a10.425 10.425 0 0 0 -3 -0.904V12h-6V6H7.5v24h9.435zM27 34.5a7.5 7.5 0 1 1 0 -15 7.5 7.5 0 0 1 0 15zm-1.939 -3.438a4.5 4.5 0 0 0 6.002 -6.002l-6.002 6zm-2.123 -2.123l6.002 -6a4.5 4.5 0 0 0 -6.002 6.002z" />
      </svg>
    </Icon>
  );
}
