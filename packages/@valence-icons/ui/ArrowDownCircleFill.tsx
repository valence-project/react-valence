import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ArrowDownCircleFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 3c8.28 0 15 6.72 15 15s-6.72 15 -15 15S3 26.28 3 18 9.72 3 18 3zm1.5 15V12h-3v6H12l6 6 6 -6h-4.5z" />
      </svg>
    </Icon>
  );
}
