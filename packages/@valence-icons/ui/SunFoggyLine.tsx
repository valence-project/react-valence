import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _SunFoggyLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M12 18h3v3H6v-3h3a9 9 0 1 1 9 9v-3a6 6 0 1 0 -6 -6zm-3 12h13.5v3H9v-3zm-6 -6h12v3H3v-3zm13.5 -22.5h3v4.5h-3V1.5zM5.272 7.394l2.121 -2.121L10.575 8.454 8.454 10.575 5.272 7.395zM25.425 27.546l2.121 -2.121 3.181 3.181 -2.121 2.121 -3.181 -3.181zm3.181 -22.275l2.121 2.123 -3.181 3.181 -2.121 -2.121 3.181 -3.181zM34.5 16.5v3h-4.5v-3h4.5z" />
      </svg>
    </Icon>
  );
}
