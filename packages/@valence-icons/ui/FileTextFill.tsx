import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FileTextFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M31.5 13.5v17.989A1.5 1.5 0 0 1 30.011 33H5.989A1.49 1.49 0 0 1 4.5 31.512V4.488C4.5 3.683 5.171 3 5.997 3H21v9a1.5 1.5 0 0 0 1.5 1.5h9zm0 -3h-7.5V3.005L31.5 10.5zM12 10.5v3h4.5V10.5H12zm0 6v3h12v-3H12zm0 6v3h12v-3H12z" />
      </svg>
    </Icon>
  );
}
