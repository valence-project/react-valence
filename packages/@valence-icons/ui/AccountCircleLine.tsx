import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _AccountCircleLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 33C9.716 33 3 26.285 3 18S9.716 3 18 3s15 6.716 15 15 -6.716 15 -15 15zm-7.481 -5.616A11.949 11.949 0 0 0 18 30c2.955 0 5.66 -1.068 7.75 -2.838A10.469 10.469 0 0 0 18.24 24a10.471 10.471 0 0 0 -7.721 3.384zM8.424 25.23A13.462 13.462 0 0 1 18.24 21a13.458 13.458 0 0 1 9.543 3.951 12 12 0 1 0 -19.359 0.28zM18 19.5a6 6 0 1 1 0 -12 6 6 0 0 1 0 12zm0 -3a3 3 0 1 0 0 -6 3 3 0 0 0 0 6z" />
      </svg>
    </Icon>
  );
}
