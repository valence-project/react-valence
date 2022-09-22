import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FileTextLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M31.5 12v19.489A1.5 1.5 0 0 1 30.011 33H5.989A1.49 1.49 0 0 1 4.5 31.512V4.488C4.5 3.683 5.173 3 6.003 3h16.492L31.5 12zm-3 1.5h-7.5V6H7.5v24h21V13.5zM12 10.5h4.5v3H12V10.5zm0 6h12v3H12v-3zm0 6h12v3H12v-3z" />
      </svg>
    </Icon>
  );
}
