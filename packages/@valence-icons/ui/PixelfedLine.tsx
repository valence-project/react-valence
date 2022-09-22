import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _PixelfedLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 3c8.284 0 15 6.716 15 15s-6.716 15 -15 15S3 26.285 3 18 9.716 3 18 3zm0 3c-6.627 0 -12 5.373 -12 12s5.373 12 12 12 12 -5.373 12 -12 -5.373 -12 -12 -12zm1.546 6.149c2.57 0 4.652 2.018 4.652 4.508s-2.082 4.508 -4.65 4.508h-2.728L12.927 24.87V14.748c0 -1.435 1.202 -2.599 2.685 -2.599h3.935z" />
      </svg>
    </Icon>
  );
}
