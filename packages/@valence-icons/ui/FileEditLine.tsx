import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FileEditLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M31.5 10.136l-3 3V6h-13.5v7.5H7.5v16.5h21v-4.136l3 -3v8.647a1.49 1.49 0 0 1 -1.49 1.488H5.989A1.5 1.5 0 0 1 4.5 31.489V12l9.005 -9h16.492C30.825 3 31.5 3.683 31.5 4.488v5.647zm1.167 3.075l2.121 2.123L23.121 27l-2.124 -0.003 0.003 -2.118 11.667 -11.667z" />
      </svg>
    </Icon>
  );
}
