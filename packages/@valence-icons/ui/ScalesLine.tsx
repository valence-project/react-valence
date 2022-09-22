import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ScalesLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M19.5 3v1.5h10.5v3h-10.5v21h6v3H10.5v-3h6V7.5H6V4.5h10.5V3h3zM7.5 9.514l4.242 4.244C12.828 14.842 13.5 16.343 13.5 18c0 3.315 -2.685 6 -6 6s-6 -2.685 -6 -6c0 -1.657 0.672 -3.157 1.758 -4.242L7.5 9.514zm21 0l4.242 4.244C33.828 14.842 34.5 16.343 34.5 18c0 3.315 -2.685 6 -6 6s-6 -2.685 -6 -6c0 -1.657 0.672 -3.157 1.758 -4.242L28.5 9.514zM7.5 13.758l-2.121 2.121C4.818 16.44 4.5 17.19 4.5 18c0 1.657 1.343 3 3 3s3 -1.343 3 -3c0 -0.81 -0.318 -1.56 -0.879 -2.121L7.5 13.758zm21 0l-2.121 2.121C25.818 16.44 25.5 17.19 25.5 18c0 1.657 1.343 3 3 3s3 -1.343 3 -3c0 -0.81 -0.318 -1.56 -0.879 -2.121L28.5 13.758z" />
      </svg>
    </Icon>
  );
}
