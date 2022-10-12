import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CloseCircleFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill={"currentColor"} viewBox="0 0 36 36">
        <path d="M18 33C9.716 33 3 26.285 3 18S9.716 3 18 3s15 6.716 15 15 -6.716 15 -15 15zm0 -17.121L13.758 11.636 11.636 13.758 15.879 18l-4.244 4.242 2.123 2.123L18 20.121l4.242 4.244 2.123 -2.123L20.121 18l4.244 -4.242 -2.123 -2.123L18 15.879z" />
      </svg>
    </Icon>
  );
}
