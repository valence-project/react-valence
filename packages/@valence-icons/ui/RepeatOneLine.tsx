import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _RepeatOneLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M12 30v2.898a0.75 0.75 0 0 1 -1.23 0.578l-6.18 -5.149A0.75 0.75 0 0 1 5.073 27H27a3 3 0 0 0 3 -3V12h3v12a6 6 0 0 1 -6 6H12zm12 -26.898a0.75 0.75 0 0 1 1.23 -0.578l6.18 5.149a0.75 0.75 0 0 1 -0.482 1.326H9a3 3 0 0 0 -3 3v12H3V12a6 6 0 0 1 6 -6h15V3.102zM16.5 12h3v12h-3v-9H13.5V13.5l3 -1.5z" />
      </svg>
    </Icon>
  );
}
