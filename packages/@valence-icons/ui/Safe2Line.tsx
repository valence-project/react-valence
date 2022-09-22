import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _Safe2Line(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30 30.499V33h-3v-1.999l-11.127 1.854A0.75 0.75 0 0 1 15 32.115V30H9v3H6v-3H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5h10.5V2.385a0.75 0.75 0 0 1 0.873 -0.74l15.873 2.646a1.5 1.5 0 0 1 1.254 1.479V9h1.5v3h-1.5v10.5h1.5v3h-1.5v3.229a1.5 1.5 0 0 1 -1.254 1.479L30 30.499zM6 7.5v19.5h9V7.5H6zm12 21.96l12 -2.001V7.041l-12 -1.999v24.417zM24.75 21c-1.242 0 -2.25 -1.68 -2.25 -3.75S23.508 13.5 24.75 13.5s2.25 1.68 2.25 3.75 -1.008 3.75 -2.25 3.75z" />
      </svg>
    </Icon>
  );
}
