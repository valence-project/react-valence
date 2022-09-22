import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ShipLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6 15.6V6a1.5 1.5 0 0 1 1.5 -1.5h7.5V1.5h6v3h7.5a1.5 1.5 0 0 1 1.5 1.5v9.6l1.629 0.489a1.5 1.5 0 0 1 1.023 1.8l-2.274 9.102a7.488 7.488 0 0 1 -2.853 -0.408l1.875 -8.028L18 15l-11.4 3.555 1.875 8.027a7.488 7.488 0 0 1 -2.853 0.41l-2.274 -9.102a1.5 1.5 0 0 1 1.023 -1.8L6 15.6zm3 -0.9L18 12l9 2.7V7.5H9v7.2zM6 30a8.967 8.967 0 0 0 6 -2.292A8.967 8.967 0 0 0 18 30a8.967 8.967 0 0 0 6 -2.292A8.967 8.967 0 0 0 30 30h3v3h-3a11.944 11.944 0 0 1 -6 -1.605A11.944 11.944 0 0 1 18 33a11.944 11.944 0 0 1 -6 -1.605A11.944 11.944 0 0 1 6 33H3v-3h3z" />
      </svg>
    </Icon>
  );
}
