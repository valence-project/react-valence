import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ListUnordered(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M12 6h19.5v3H12V6zM6.75 9.75a2.25 2.25 0 1 1 0 -4.5 2.25 2.25 0 0 1 0 4.5zm0 10.5a2.25 2.25 0 1 1 0 -4.5 2.25 2.25 0 0 1 0 4.5zm0 10.35a2.25 2.25 0 1 1 0 -4.5 2.25 2.25 0 0 1 0 4.5zM12 16.5h19.5v3H12v-3zm0 10.5h19.5v3H12v-3z" />
      </svg>
    </Icon>
  );
}
