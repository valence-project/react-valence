import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FileEditFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M31.5 22.864v8.647a1.49 1.49 0 0 1 -1.49 1.488H5.989A1.5 1.5 0 0 1 4.5 31.489V13.5h9a1.5 1.5 0 0 0 1.5 -1.5V3h15.003c0.827 0 1.497 0.682 1.497 1.488v5.647l-13.498 13.5 -0.009 6.357 6.369 0.009L31.5 22.864zm1.167 -9.652l2.121 2.121L23.121 27l-2.124 -0.003 0.003 -2.118 11.667 -11.667zM4.5 10.5l7.5 -7.495V10.5H4.5z" />
      </svg>
    </Icon>
  );
}
