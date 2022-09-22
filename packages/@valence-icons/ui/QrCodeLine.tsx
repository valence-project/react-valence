import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _QrCodeLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M24 25.5v-1.5h-4.5v-4.5h4.5v3h3v3h-1.5v3h-3v3h-3v-4.5h3v-1.5h1.5zm7.5 6h-6v-3h3v-3h3v6zM4.5 4.5h12v12H4.5V4.5zm3 3v6h6V7.5H7.5zm12 -3h12v12h-12V4.5zm3 3v6h6V7.5h-6zM4.5 19.5h12v12H4.5v-12zm3 3v6h6v-6H7.5zm19.5 -3h4.5v3h-4.5v-3zM9 9h3v3H9V9zm0 15h3v3H9v-3zM24 9h3v3h-3V9z" />
      </svg>
    </Icon>
  );
}
