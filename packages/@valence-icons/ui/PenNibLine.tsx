import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _PenNibLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M24.894 1.56l9.521 9.519a0.75 0.75 0 0 1 -0.416 1.272l-2.211 0.345 -8.484 -8.484 0.318 -2.228a0.75 0.75 0 0 1 1.272 -0.424zM6.893 30.225c5.583 -4.997 11.992 -6.492 18.965 -8.28l0.669 -6.027 -6.445 -6.445 -6.027 0.669c-1.788 6.972 -3.284 13.38 -8.28 18.965L3.681 27.015c4.242 -4.95 5.835 -10.43 7.954 -19.621l9.546 -1.06 8.486 8.486 -1.06 9.546c-9.192 2.121 -14.673 3.713 -19.621 7.954L6.893 30.225zm7.926 -9.045a3 3 0 1 1 4.242 -4.242A3 3 0 0 1 14.82 21.18z" />
      </svg>
    </Icon>
  );
}
