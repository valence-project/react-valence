import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _UserSettingsFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 21v12H6a12 12 0 0 1 12 -12zm0 -1.5c-4.973 0 -9 -4.027 -9 -9s4.027 -9 9 -9 9 4.027 9 9 -4.027 9 -9 9zm3.893 8.718a5.265 5.265 0 0 1 0 -2.434l-1.488 -0.859 1.5 -2.598 1.488 0.859A5.244 5.244 0 0 1 25.5 21.968V20.25h3v1.718c0.798 0.237 1.518 0.66 2.107 1.218l1.488 -0.859 1.5 2.598 -1.488 0.859a5.265 5.265 0 0 1 0 2.433l1.488 0.859 -1.5 2.598 -1.488 -0.859a5.244 5.244 0 0 1 -2.107 1.218V33.75h-3v-1.718a5.244 5.244 0 0 1 -2.107 -1.218l-1.488 0.859 -1.5 -2.598 1.488 -0.858zM27 25.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0 -3z" />
      </svg>
    </Icon>
  );
}
