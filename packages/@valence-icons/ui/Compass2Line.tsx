import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _Compass2Line(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M24.938 4.7l-2.25 2.25A11.97 11.97 0 0 0 18 6c-6.63 0 -12 5.37 -12 12s5.37 12 12 12 12 -5.37 12 -12a11.97 11.97 0 0 0 -0.95 -4.688l2.25 -2.25A14.927 14.927 0 0 1 33 18c0 8.28 -6.72 15 -15 15S3 26.28 3 18 9.72 3 18 3c2.502 0 4.862 0.615 6.938 1.7zm2.609 1.633l2.121 2.121L18 20.121 15.879 18l11.667 -11.667z" />
      </svg>
    </Icon>
  );
}
