import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _UserHeartFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M26.762 23.489l0.264 0.265 0.267 -0.265a3.375 3.375 0 0 1 4.773 4.773l-5.04 5.038 -5.037 -5.038a3.375 3.375 0 0 1 4.773 -4.773zM18 21v12H6a12 12 0 0 1 11.625 -11.994L18 21zm0 -19.5c4.973 0 9 4.027 9 9s-4.027 9 -9 9 -9 -4.027 -9 -9 4.027 -9 9 -9z" />
      </svg>
    </Icon>
  );
}
