import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _LinkedinBoxLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6 4.5h24a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm1.5 3v21h21V7.5H7.5zm3.75 6a2.25 2.25 0 1 1 0 -4.5 2.25 2.25 0 0 1 0 4.5zm-1.5 1.5h3v11.25h-3V15zm8.25 0.645c0.876 -0.847 1.899 -1.395 3 -1.395 3.107 0 5.25 2.518 5.25 5.625v6.375h-3v-6.375a2.625 2.625 0 0 0 -5.25 0v6.375h-3V15h3v0.645z" />
      </svg>
    </Icon>
  );
}
