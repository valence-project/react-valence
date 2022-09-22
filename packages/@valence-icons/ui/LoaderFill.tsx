import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _LoaderFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 3a1.5 1.5 0 0 1 1.5 1.5v4.5a1.5 1.5 0 0 1 -3 0V4.5a1.5 1.5 0 0 1 1.5 -1.5zm0 22.5a1.5 1.5 0 0 1 1.5 1.5v4.5a1.5 1.5 0 0 1 -3 0v-4.5a1.5 1.5 0 0 1 1.5 -1.5zm12.99 -15a1.5 1.5 0 0 1 -0.549 2.049l-3.897 2.25a1.5 1.5 0 1 1 -1.5 -2.598l3.897 -2.25A1.5 1.5 0 0 1 30.99 10.5zM11.505 21.75a1.5 1.5 0 0 1 -0.549 2.049l-3.897 2.25a1.5 1.5 0 1 1 -1.5 -2.598l3.897 -2.25a1.5 1.5 0 0 1 2.049 0.549zM30.99 25.5a1.5 1.5 0 0 1 -2.049 0.549l-3.897 -2.25a1.5 1.5 0 0 1 1.5 -2.598l3.897 2.25A1.5 1.5 0 0 1 30.99 25.5zM11.505 14.25a1.5 1.5 0 0 1 -2.049 0.549l-3.897 -2.25a1.5 1.5 0 1 1 1.5 -2.598l3.897 2.25A1.5 1.5 0 0 1 11.505 14.25z" />
      </svg>
    </Icon>
  );
}
