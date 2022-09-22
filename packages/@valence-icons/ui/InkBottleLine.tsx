import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _InkBottleLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M24 13.5l6.557 2.623c0.57 0.226 0.944 0.78 0.944 1.392V31.5c0 0.828 -0.672 1.5 -1.5 1.5H6c-0.828 0 -1.5 -0.672 -1.5 -1.5v-13.985c0 -0.613 0.373 -1.165 0.944 -1.392L12 13.5h12zm-0.578 3h-10.845L7.5 18.531V30h21v-1.5H12v-7.5h16.5v-2.469L23.422 16.5zM24 4.5c0.828 0 1.5 0.672 1.5 1.5v6H10.5V6c0 -0.828 0.672 -1.5 1.5 -1.5h12zm-1.5 3H13.5v1.5h9V7.5z" />
      </svg>
    </Icon>
  );
}
