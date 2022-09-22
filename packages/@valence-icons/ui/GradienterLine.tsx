import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _GradienterLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M3.075 19.5h3.018a12.002 12.002 0 0 0 23.814 0h3.019c-0.753 7.579 -7.149 13.5 -14.927 13.5 -7.777 0 -14.174 -5.921 -14.925 -13.5zm0 -3C3.825 8.921 10.221 3 18 3s14.174 5.921 14.925 13.5h-3.018a12.002 12.002 0 0 0 -23.814 0H3.074zM18 21a3 3 0 1 1 0 -6 3 3 0 0 1 0 6z" />
      </svg>
    </Icon>
  );
}
