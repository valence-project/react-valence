import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CameraLensLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M14.787 29.565L18 24H7.605a12.027 12.027 0 0 0 7.182 5.565zM6.378 21h6.426L7.605 11.998A11.944 11.944 0 0 0 6 18c0 1.035 0.132 2.04 0.378 3zm3.214 -11.562L12.803 15 18 6a11.961 11.961 0 0 0 -8.408 3.438zm11.62 -3.003L18 12h10.395a12.027 12.027 0 0 0 -7.182 -5.565zM29.622 15h-6.426l5.197 9.002A11.944 11.944 0 0 0 30 18c0 -1.035 -0.132 -2.04 -0.378 -3zm-3.214 11.562L23.197 21 18 30a11.961 11.961 0 0 0 8.408 -3.438zM18 33C9.716 33 3 26.285 3 18S9.716 3 18 3s15 6.716 15 15 -6.716 15 -15 15zm1.732 -18h-3.465l-1.731 3 1.731 3h3.465l1.731 -3 -1.731 -3z" />
      </svg>
    </Icon>
  );
}
