import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _SipLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M9.685 28.436l12.846 -12.846 -2.121 -2.121 -12.846 12.846 2.121 2.121zm8.603 -17.088l-2.121 -2.121 2.121 -2.121 2.652 2.651 4.244 -4.242a1.5 1.5 0 0 1 2.121 0l3.181 3.181a1.5 1.5 0 0 1 0 2.121l-4.242 4.244 2.651 2.652 -2.121 2.121 -2.121 -2.121L10.864 31.5H4.5v-6.365l13.788 -13.788z" />
      </svg>
    </Icon>
  );
}
