import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FileCodeLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M22.5 6H7.5v24h21V12h-6V6zM4.5 4.488C4.5 3.666 5.171 3 5.998 3H24l7.5 7.5v20.989A1.5 1.5 0 0 1 30.011 33H5.989A1.5 1.5 0 0 1 4.5 31.512V4.488zM26.486 18l-5.304 5.304 -2.121 -2.123L22.242 18l-3.18 -3.181 2.119 -2.123L26.486 18zM9.514 18L14.82 12.696l2.121 2.123L13.758 18l3.18 3.181 -2.119 2.123L9.514 18z" />
      </svg>
    </Icon>
  );
}
