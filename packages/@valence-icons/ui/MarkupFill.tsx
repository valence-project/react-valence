import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _MarkupFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 33C9.716 33 3 26.285 3 18S9.716 3 18 3s15 6.716 15 15 -6.716 15 -15 15zm7.577 -5.694l-1.293 -5.171a1.5 1.5 0 0 0 -1.455 -1.135H13.172a1.5 1.5 0 0 0 -1.455 1.135l-1.293 5.171A11.95 11.95 0 0 0 18 30a11.95 11.95 0 0 0 7.577 -2.694zM15 18h6v-2.25l-1.557 -5.452a1.5 1.5 0 0 0 -2.886 0L15 15.75V18z" />
      </svg>
    </Icon>
  );
}
