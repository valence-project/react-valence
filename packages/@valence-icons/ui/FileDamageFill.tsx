import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FileDamageFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 21l6 3.75 4.5 -5.25 4.5 6 3 -3.75 4.5 0.75 -4.5 -4.5 -3 3.75 -4.5 -7.5 -5.25 5.625L4.5 15V4.488C4.5 3.683 5.171 3 5.997 3H21v9a1.5 1.5 0 0 0 1.5 1.5h9v17.989A1.5 1.5 0 0 1 30.011 33H5.989A1.49 1.49 0 0 1 4.5 31.512V21zm27 -10.5h-7.5V3.005L31.5 10.5z" />
      </svg>
    </Icon>
  );
}
