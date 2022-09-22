import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _UserVoiceLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M1.5 33a12 12 0 1 1 24 0h-3a9 9 0 1 0 -18 0H1.5zm12 -13.5c-4.973 0 -9 -4.027 -9 -9s4.027 -9 9 -9 9 4.027 9 9 -4.027 9 -9 9zm0 -3c3.315 0 6 -2.685 6 -6s-2.685 -6 -6 -6 -6 2.685 -6 6 2.685 6 6 6zM32.322 1.176A20.913 20.913 0 0 1 34.5 10.5c0 3.349 -0.784 6.516 -2.178 9.324l-2.468 -1.794A17.933 17.933 0 0 0 31.5 10.5c0 -2.688 -0.59 -5.239 -1.645 -7.53L32.322 1.176zm-4.953 3.6A14.955 14.955 0 0 1 28.5 10.5a14.955 14.955 0 0 1 -1.131 5.724l-2.516 -1.83A11.985 11.985 0 0 0 25.5 10.5a11.985 11.985 0 0 0 -0.645 -3.894l2.514 -1.83z" />
      </svg>
    </Icon>
  );
}
