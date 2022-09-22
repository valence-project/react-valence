import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _UserLocationLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 21v3a9 9 0 0 0 -9 9H6a12 12 0 0 1 12 -12zm0 -1.5c-4.973 0 -9 -4.027 -9 -9s4.027 -9 9 -9 9 4.027 9 9 -4.027 9 -9 9zm0 -3c3.315 0 6 -2.685 6 -6s-2.685 -6 -6 -6 -6 2.685 -6 6 2.685 6 6 6zm13.242 15.107L27 36l-4.242 -4.393c-2.345 -2.427 -2.345 -6.36 0 -8.787a5.856 5.856 0 0 1 8.484 0c2.345 2.427 2.345 6.36 0 8.787zm-2.157 -2.085c1.22 -1.263 1.22 -3.354 0 -4.617a2.856 2.856 0 0 0 -4.17 0c-1.22 1.263 -1.22 3.354 0 4.619L27 31.68l2.085 -2.16z" />
      </svg>
    </Icon>
  );
}
