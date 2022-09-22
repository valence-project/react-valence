import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _GlobalLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 33C9.716 33 3 26.285 3 18S9.716 3 18 3s15 6.716 15 15 -6.716 15 -15 15zm-3.435 -3.5A26.85 26.85 0 0 1 12.04 19.5H6.093a12.012 12.012 0 0 0 8.472 10zM15.045 19.5c0.226 3.659 1.272 7.095 2.955 10.128A23.857 23.857 0 0 0 20.955 19.5h-5.91zm14.862 0h-5.947a26.85 26.85 0 0 1 -2.525 10A12.012 12.012 0 0 0 29.907 19.5zM6.093 16.5h5.947A26.85 26.85 0 0 1 14.565 6.5 12.012 12.012 0 0 0 6.093 16.5zm8.954 0h5.907A23.857 23.857 0 0 0 18 6.372 23.857 23.857 0 0 0 15.045 16.5zm6.389 -10A26.85 26.85 0 0 1 23.96 16.5h5.947a12.012 12.012 0 0 0 -8.472 -10z" />
      </svg>
    </Icon>
  );
}
