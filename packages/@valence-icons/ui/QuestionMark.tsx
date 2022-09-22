import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _QuestionMark(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 28.5c1.242 0 2.25 1.008 2.25 2.25S19.242 33 18 33s-2.25 -1.008 -2.25 -2.25 1.008 -2.25 2.25 -2.25zm0 -25.5c4.971 0 9 4.029 9 9 0 3.248 -1.129 4.935 -4.011 7.385C20.098 21.84 19.5 22.946 19.5 25.5h-3c0 -3.711 1.181 -5.542 4.546 -8.402C23.322 15.165 24 14.151 24 12c0 -3.315 -2.685 -6 -6 -6S12 8.685 12 12v1.5H9V12c0 -4.971 4.029 -9 9 -9z" />
      </svg>
    </Icon>
  );
}
