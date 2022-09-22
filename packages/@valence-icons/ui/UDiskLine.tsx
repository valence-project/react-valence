import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _UDiskLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M28.5 18H7.5v12h21v-12zM7.5 15V3h21v12h1.5a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V16.5a1.5 1.5 0 0 1 1.5 -1.5h1.5zm3 0h15V6H10.5v9zm3 -6h3v3H13.5V9zm6 0h3v3h-3V9z" />
      </svg>
    </Icon>
  );
}
