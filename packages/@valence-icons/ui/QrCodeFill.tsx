import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _QrCodeFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M24 25.5v-1.5h-4.5v-4.5h4.5v3h3v3h-1.5v3h-3v3h-3v-4.5h3v-1.5h1.5zm7.5 6h-6v-3h3v-3h3v6zM4.5 4.5h12v12H4.5V4.5zm15 0h12v12h-12V4.5zM4.5 19.5h12v12H4.5v-12zm22.5 0h4.5v3h-4.5v-3zM9 9v3h3V9H9zm0 15v3h3v-3H9zM24 9v3h3V9h-3z" />
      </svg>
    </Icon>
  );
}
