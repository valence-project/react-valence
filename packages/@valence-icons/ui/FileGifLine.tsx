import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FileGifLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M24 3l7.5 7.5v20.989c0 0.834 -0.667 1.51 -1.49 1.51H5.989C5.167 33 4.5 32.318 4.5 31.512V4.488C4.5 3.666 5.171 3 5.998 3H24zm-1.5 3H7.5v24h21V12h-6V6zm-3 9v7.5h-1.5v-7.5h1.5zm-3 0v1.5H13.5c-0.828 0 -1.5 0.672 -1.5 1.5v1.5c0 0.828 0.672 1.5 1.5 1.5h1.5v-1.5H13.5v-1.5h3v3c0 0.828 -0.672 1.5 -1.5 1.5H13.5c-1.657 0 -3 -1.343 -3 -3v-1.5c0 -1.657 1.343 -3 3 -3h3zm9 0v1.5h-3v1.5h3v1.5h-3v3h-1.5v-7.5h4.5z" />
      </svg>
    </Icon>
  );
}
