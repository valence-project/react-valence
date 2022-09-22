import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _SyringeLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M32.517 11.97l-2.123 2.119 -3.18 -3.18 -3.183 3.18 5.303 5.304 -2.121 2.121 -1.06 -1.06L16.607 30H8.121l-3.181 3.181 -2.121 -2.121L6 27.879v-8.486l9.546 -9.546 -1.06 -1.06 2.121 -2.121 5.304 5.303 3.18 -3.181 -3.18 -3.181 2.121 -2.123 8.486 8.486zm-8.486 6.363l-6.365 -6.365 -2.121 2.121 3.181 3.183 -2.121 2.121 -3.181 -3.181 -2.121 2.121 3.18 3.181 -2.119 2.121 -3.183 -3.181 -0.181 0.181V27h6.365l8.667 -8.667z" />
      </svg>
    </Icon>
  );
}
