import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _UnsplashLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M15 15v6h6v-6h10.5v16.5H4.5V15h10.5zm-3 3H7.5v10.5h21v-10.5h-4.5l-0.002 6H12v-6zm12 -13.5v9H12V4.5h12zm-3 3h-6v3h6V7.5z" />
      </svg>
    </Icon>
  );
}
