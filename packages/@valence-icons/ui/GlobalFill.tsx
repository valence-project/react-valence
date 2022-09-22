import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _GlobalFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M3.075 19.5h8.216a26.85 26.85 0 0 0 4.387 13.32A15.008 15.008 0 0 1 3.075 19.5zm0 -3a15.008 15.008 0 0 1 12.603 -13.32A26.85 26.85 0 0 0 11.29 16.5H3.075zm29.85 0h-8.216a26.85 26.85 0 0 0 -4.387 -13.32A15.008 15.008 0 0 1 32.925 16.5zm0 3a15.008 15.008 0 0 1 -12.603 13.32A26.85 26.85 0 0 0 24.709 19.5h8.217zM14.295 19.5h7.41A23.862 23.862 0 0 1 18 30.888 23.862 23.862 0 0 1 14.295 19.5zm0 -3A23.862 23.862 0 0 1 18 5.112 23.862 23.862 0 0 1 21.705 16.5H14.295z" />
      </svg>
    </Icon>
  );
}
