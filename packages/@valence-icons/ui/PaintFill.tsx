import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _PaintFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M28.842 28.098l2.652 -2.652 2.651 2.652a3.75 3.75 0 1 1 -5.303 0zM13.317 1.62l16.971 16.97a1.5 1.5 0 0 1 0 2.123l-12.727 12.727a1.5 1.5 0 0 1 -2.121 0l-12.727 -12.727a1.5 1.5 0 0 1 0 -2.123l11.667 -11.667 -3.183 -3.181L13.32 1.62zM16.5 9.045L5.893 19.65H27.105L16.5 9.045z" />
      </svg>
    </Icon>
  );
}
