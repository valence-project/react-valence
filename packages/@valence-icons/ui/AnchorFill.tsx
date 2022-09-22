import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _AnchorFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M19.5 14.811v15.081c5.429 -0.679 9.73 -5.004 10.407 -10.458H25.5L31.056 10.5A15.062 15.062 0 0 1 33 17.925C33 26.25 26.285 33 18 33S3 26.25 3 17.925c0 -2.7 0.706 -5.233 1.944 -7.425L10.5 19.434H6.093c0.676 5.454 4.98 9.779 10.407 10.458V14.811A6.003 6.003 0 0 1 18 3a6 6 0 0 1 1.5 11.811zM18 12a3 3 0 1 0 0 -6 3 3 0 0 0 0 6z" />
      </svg>
    </Icon>
  );
}
