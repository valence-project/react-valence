import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ZoomOutLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M27.046 24.925l6.425 6.423 -2.123 2.123 -6.423 -6.425A13.44 13.44 0 0 1 16.5 30c-7.452 0 -13.5 -6.048 -13.5 -13.5s6.048 -13.5 13.5 -13.5 13.5 6.048 13.5 13.5a13.44 13.44 0 0 1 -2.954 8.425zm-3.009 -1.113A10.466 10.466 0 0 0 27 16.5c0 -5.802 -4.7 -10.5 -10.5 -10.5 -5.802 0 -10.5 4.698 -10.5 10.5 0 5.8 4.698 10.5 10.5 10.5a10.466 10.466 0 0 0 7.313 -2.963l0.225 -0.225zM10.5 15h12v3H10.5v-3z" />
      </svg>
    </Icon>
  );
}
