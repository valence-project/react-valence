import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _RadarFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M21.552 6.597l-5.226 9.053 2.598 1.5L24.15 8.097c6.255 4.158 9.459 10.62 6.84 15.153 -2.79 4.833 -10.784 5.032 -17.865 0.945C6.043 20.103 2.22 13.082 5.01 8.25c2.618 -4.535 9.815 -4.99 16.542 -1.653zm2.274 -3.938l2.598 1.5 -2.25 3.897 -2.598 -1.5 2.25 -3.897zM10.098 30H25.5v3H7.526a1.492 1.492 0 0 1 -1.325 -0.75 1.507 1.507 0 0 1 0 -1.5l3.375 -5.845 2.598 1.5L10.098 30z" />
      </svg>
    </Icon>
  );
}
