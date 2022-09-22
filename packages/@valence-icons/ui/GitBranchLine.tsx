import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _GitBranchLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M10.658 22.815A4.502 4.502 0 1 1 7.5 22.755V13.245a4.502 4.502 0 1 1 3 0V18c1.254 -0.942 2.811 -1.5 4.5 -1.5h6a4.502 4.502 0 0 0 4.343 -3.315 4.502 4.502 0 1 1 3.048 0.096A7.502 7.502 0 0 1 21 19.5h-6a4.502 4.502 0 0 0 -4.343 3.315zM9 25.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0 -3zM9 7.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0 -3zm18 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0 -3z" />
      </svg>
    </Icon>
  );
}
