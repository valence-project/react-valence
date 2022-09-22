import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FileLockLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M22.5 6H7.5v24h21V12h-6V6zM4.5 4.488C4.5 3.666 5.171 3 5.998 3H24l7.5 7.5v20.989A1.5 1.5 0 0 1 30.011 33H5.989A1.5 1.5 0 0 1 4.5 31.512V4.488zM22.5 16.5h1.5v7.5H12v-7.5h1.5v-1.5a4.5 4.5 0 0 1 9 0v1.5zm-3 0v-1.5a1.5 1.5 0 0 0 -3 0v1.5h3z" />
      </svg>
    </Icon>
  );
}
