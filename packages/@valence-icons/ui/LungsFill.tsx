import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _LungsFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M12.75 8.25c2.118 0.705 3.072 3.238 3.49 6.034l-6.784 3.917 1.5 2.598 5.565 -3.212C16.59 19.619 16.5 21.462 16.5 22.5c0 4.5 -1.5 9 -7.5 9s-6 0 -6 -6C3 14.25 8.25 6.75 12.75 8.25zM33.002 25.5v0.654c-0.007 5.346 -0.225 5.346 -6 5.346 -6 0 -7.5 -4.5 -7.5 -9 0 -1.036 -0.09 -2.88 -0.021 -4.911l5.565 3.21 1.5 -2.598 -6.784 -3.915c0.419 -2.797 1.373 -5.329 3.49 -6.036 4.5 -1.5 9.75 6 9.75 17.25zM19.5 3v13.5h-3V3h3z" />
      </svg>
    </Icon>
  );
}
