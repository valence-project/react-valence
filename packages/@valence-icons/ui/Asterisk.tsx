import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _Asterisk(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M19.5 4.5v10.901l9.441 -5.45 1.5 2.598 -9.44 5.45 9.44 5.452 -1.5 2.598L19.5 20.598V31.5h-3v-10.902l-9.441 5.451 -1.5 -2.598L14.998 18 5.559 12.549l1.5 -2.598L16.5 15.4V4.5z" />
      </svg>
    </Icon>
  );
}
