import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _VolumeVibrateLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M29.085 4.742l2.119 2.121 -3.713 3.713 3.713 3.713L27.492 18l3.713 3.714 -3.713 3.713 3.713 3.713 -2.121 2.121 -5.833 -5.835 3.713 -3.711L23.25 18l3.713 -3.713L23.25 10.575l5.835 -5.833zm-9.755 0.867a0.75 0.75 0 0 1 0.17 0.474v23.835a0.75 0.75 0 0 1 -1.225 0.581L10.335 23.998 4.5 24a1.5 1.5 0 0 1 -1.5 -1.5V13.5a1.5 1.5 0 0 1 1.5 -1.5h5.833l7.941 -6.498a0.75 0.75 0 0 1 1.056 0.105zM16.5 10.83L11.404 14.998H6V21l5.405 -0.002L16.5 25.169V10.83z" />
      </svg>
    </Icon>
  );
}
