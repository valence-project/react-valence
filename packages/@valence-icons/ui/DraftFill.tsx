import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _DraftFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30 3c0.828 0 1.5 0.672 1.5 1.5v5.636l-13.498 13.5 -0.009 6.357 6.369 0.009L31.5 22.863V31.5c0 0.828 -0.672 1.5 -1.5 1.5H6c-0.828 0 -1.5 -0.672 -1.5 -1.5V4.5c0 -0.828 0.672 -1.5 1.5 -1.5h24zm2.667 10.212l2.121 2.121L23.121 27l-2.124 -0.003 0.003 -2.118 11.667 -11.667zM18 18H10.5v3h7.5v-3zm4.5 -6H10.5v3h12V12z" />
      </svg>
    </Icon>
  );
}
