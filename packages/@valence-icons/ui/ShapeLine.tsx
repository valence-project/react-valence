import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ShapeLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M11.745 30A4.502 4.502 0 1 1 6 24.255V11.745A4.502 4.502 0 1 1 11.745 6h12.51A4.502 4.502 0 1 1 30 11.745v12.51A4.502 4.502 0 1 1 24.255 30H11.745zm0 -3h12.51A4.512 4.512 0 0 1 27 24.255V11.745A4.512 4.512 0 0 1 24.255 9H11.745A4.512 4.512 0 0 1 9 11.745v12.51A4.512 4.512 0 0 1 11.745 27zM7.5 9a1.5 1.5 0 1 0 0 -3 1.5 1.5 0 0 0 0 3zm21 0a1.5 1.5 0 1 0 0 -3 1.5 1.5 0 0 0 0 3zm0 21a1.5 1.5 0 1 0 0 -3 1.5 1.5 0 0 0 0 3zM7.5 30a1.5 1.5 0 1 0 0 -3 1.5 1.5 0 0 0 0 3z" />
      </svg>
    </Icon>
  );
}
