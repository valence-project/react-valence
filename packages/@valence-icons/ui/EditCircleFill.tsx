import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _EditCircleFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M24.939 4.698L13.935 15.699l0.012 6.37 6.357 -0.011 10.997 -10.998A14.936 14.936 0 0 1 33 18c0 8.284 -6.716 15 -15 15S3 26.285 3 18 9.716 3 18 3c2.503 0 4.863 0.613 6.939 1.698zm5.79 -1.546l2.119 2.121 -13.788 13.788 -2.118 0.005 -0.003 -2.126L30.727 3.15z" />
      </svg>
    </Icon>
  );
}
