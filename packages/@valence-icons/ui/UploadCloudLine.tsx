import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _UploadCloudLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M1.5 21.75a9.744 9.744 0 0 1 4.596 -8.279 12.002 12.002 0 0 1 23.808 0 9.75 9.75 0 0 1 -4.404 18L10.5 31.5c-5.034 -0.411 -9 -4.617 -9 -9.75zm23.772 6.731a6.75 6.75 0 0 0 3.045 -12.463l-1.211 -0.754 -0.18 -1.413a9.002 9.002 0 0 0 -17.855 0l-0.18 1.413 -1.208 0.754a6.75 6.75 0 0 0 3.043 12.463l0.259 0.019h14.025l0.259 -0.019zM19.5 19.5v6h-3v-6H12l6 -7.5 6 7.5h-4.5z" />
      </svg>
    </Icon>
  );
}
