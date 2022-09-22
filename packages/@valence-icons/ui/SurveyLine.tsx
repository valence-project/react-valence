import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _SurveyLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M25.5 3v3h4.511c0.822 0 1.49 0.667 1.49 1.49v24.021c0 0.822 -0.667 1.49 -1.49 1.49H5.989C5.167 33 4.5 32.332 4.5 31.511V7.49C4.5 6.668 5.167 6 5.989 6H10.5V3h15zM10.5 9H7.5v21h21V9h-3v3H10.5V9zm3 15v3H10.5v-3h3zm0 -4.5v3H10.5v-3h3zm0 -4.5v3H10.5v-3h3zm9 -9H13.5v3h9V6z" />
      </svg>
    </Icon>
  );
}
