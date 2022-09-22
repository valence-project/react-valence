import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ChromeLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M15.547 29.749l2.895 -5.013a6.748 6.748 0 0 1 -6.351 -3.473L7.191 12.78a12.005 12.005 0 0 0 8.355 16.97zm3.338 0.219A12 12 0 0 0 29.403 14.25h-5.79A6.72 6.72 0 0 1 24.75 18a6.72 6.72 0 0 1 -0.963 3.477l-4.902 8.49zm2.329 -10.037l0.033 -0.057a3.75 3.75 0 1 0 -6.531 -0.063l0.036 0.063a3.748 3.748 0 0 0 6.462 0.057zm-12.162 -9.93l2.893 5.01A6.75 6.75 0 0 1 18 11.25h9.922A11.988 11.988 0 0 0 18 6a11.97 11.97 0 0 0 -8.947 4.003zM18 33C9.716 33 3 26.285 3 18S9.716 3 18 3s15 6.716 15 15 -6.716 15 -15 15z" />
      </svg>
    </Icon>
  );
}
