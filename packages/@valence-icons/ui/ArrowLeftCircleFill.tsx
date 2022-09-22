import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ArrowLeftCircleFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 3c8.28 0 15 6.72 15 15s-6.72 15 -15 15S3 26.28 3 18 9.72 3 18 3zm0 13.5V12l-6 6 6 6v-4.5h6v-3h-6z" />
      </svg>
    </Icon>
  );
}
