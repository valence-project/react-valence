import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _SurveyFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M9 6v6h18V6h3.011c0.822 0 1.49 0.667 1.49 1.49v24.021c0 0.822 -0.667 1.49 -1.49 1.49H5.989C5.167 33 4.5 32.332 4.5 31.511V7.49C4.5 6.668 5.167 6 5.989 6H9zm4.5 19.5H10.5v3h3v-3zm0 -4.5H10.5v3h3v-3zm0 -4.5H10.5v3h3v-3zm10.5 -13.5v6H12V3h12z" />
      </svg>
    </Icon>
  );
}
