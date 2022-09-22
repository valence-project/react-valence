import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _MouseFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M16.712 3h2.577c3.021 0 4.641 0.417 6.108 1.202a8.178 8.178 0 0 1 3.402 3.402c0.784 1.467 1.202 3.087 1.202 6.108v8.577c0 3.021 -0.417 4.641 -1.202 6.108a8.178 8.178 0 0 1 -3.402 3.402c-1.467 0.784 -3.087 1.202 -6.108 1.202H16.71c-3.021 0 -4.641 -0.417 -6.108 -1.202a8.178 8.178 0 0 1 -3.402 -3.402C6.417 26.929 6 25.309 6 22.288V13.71c0 -3.021 0.417 -4.641 1.202 -6.108A8.178 8.178 0 0 1 10.605 4.202C12.071 3.417 13.691 3 16.712 3zM16.5 9v7.5h3V9h-3z" />
      </svg>
    </Icon>
  );
}
