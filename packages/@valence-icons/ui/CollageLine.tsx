import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CollageLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30 4.5c0.828 0 1.5 0.672 1.5 1.5v24c0 0.828 -0.672 1.5 -1.5 1.5H6c-0.828 0 -1.5 -0.672 -1.5 -1.5V6c0 -0.828 0.672 -1.5 1.5 -1.5h24zm-13.216 15.237L7.5 21.375V28.5h10.827l-1.545 -8.763zM28.5 7.5h-10.829l3.702 21H28.5V7.5zM14.625 7.5H7.5v10.827l8.763 -1.545L14.625 7.5z" />
      </svg>
    </Icon>
  );
}
