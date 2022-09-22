import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _PlantFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M31.5 4.5v3c0 5.799 -4.701 10.5 -10.5 10.5h-1.5v1.5h7.5v10.5c0 1.657 -1.343 3 -3 3H12c-1.657 0 -3 -1.343 -3 -3v-10.5h7.5v-4.5c0 -5.799 4.701 -10.5 10.5 -10.5h4.5zM8.25 3c3.793 0 7.147 1.876 9.186 4.753C15.906 9.765 15 12.277 15 15v1.5h-0.75C8.037 16.5 3 11.463 3 5.25V3h5.25z" />
      </svg>
    </Icon>
  );
}
