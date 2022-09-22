import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FilterOffLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M10.393 0.772L31.605 21.986l-2.121 2.121 -5.734 -5.733L22.5 20.25V33H13.5v-12.75L6 9H4.5V6h6.877l-3.105 -3.107L10.393 0.772zM14.378 9H9.606L16.5 19.341V30h3v-10.659l2.088 -3.131L14.378 9zM31.5 6v3h-1.5l-2.873 4.308 -2.163 -2.165L26.394 9h-3.575l-3 -3H31.5z" />
      </svg>
    </Icon>
  );
}
