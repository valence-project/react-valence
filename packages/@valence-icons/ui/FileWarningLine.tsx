import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FileWarningLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M22.5 6H7.5v24h21V12h-6V6zM4.5 4.488C4.5 3.666 5.171 3 5.998 3H24l7.5 7.5v20.989A1.5 1.5 0 0 1 30.011 33H5.989A1.5 1.5 0 0 1 4.5 31.512V4.488zM16.5 22.5h3v3h-3v-3zm0 -12h3v9h-3V10.5z" />
      </svg>
    </Icon>
  );
}
