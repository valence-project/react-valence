import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ChromeFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M14.741 32.645C8.025 31.157 3 25.166 3 18c0 -2.733 0.73 -5.295 2.008 -7.503l6.425 11.128a7.498 7.498 0 0 0 7.464 3.822l-4.155 7.197zM18 33l6.431 -11.137A7.466 7.466 0 0 0 25.5 18a7.467 7.467 0 0 0 -1.5 -4.5h8.313c0.447 1.42 0.687 2.933 0.687 4.5 0 8.284 -6.716 15 -15 15zm3.858 -12.683a4.498 4.498 0 0 1 -7.755 -0.068l-0.044 -0.075a4.5 4.5 0 1 1 7.837 0.075l-0.039 0.068zm-14.91 -12.459A14.961 14.961 0 0 1 18 3a14.994 14.994 0 0 1 12.993 7.5H18a7.502 7.502 0 0 0 -6.899 4.553L6.948 7.858z" />
      </svg>
    </Icon>
  );
}
