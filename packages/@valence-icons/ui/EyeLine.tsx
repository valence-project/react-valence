import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _EyeLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 4.5c8.088 0 14.817 5.82 16.229 13.5 -1.41 7.68 -8.14 13.5 -16.229 13.5 -8.088 0 -14.817 -5.82 -16.229 -13.5C3.181 10.32 9.912 4.5 18 4.5zm0 24a13.508 13.508 0 0 0 13.165 -10.5 13.508 13.508 0 0 0 -26.331 0A13.508 13.508 0 0 0 18 28.5zm0 -3.75a6.75 6.75 0 1 1 0 -13.5 6.75 6.75 0 0 1 0 13.5zm0 -3a3.75 3.75 0 1 0 0 -7.5 3.75 3.75 0 0 0 0 7.5z" />
      </svg>
    </Icon>
  );
}
