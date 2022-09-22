import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ShareForwardLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M19.5 21h-3a13.498 13.498 0 0 0 -11.952 7.215A15.204 15.204 0 0 1 4.5 27C4.5 18.715 11.216 12 19.5 12V3.75L35.25 16.5 19.5 29.25V21zm-3 -3h6v4.962L30.482 16.5 22.5 10.038V15h-3a11.973 11.973 0 0 0 -9.085 4.16A16.482 16.482 0 0 1 16.5 18z" />
      </svg>
    </Icon>
  );
}
