import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _DropboxFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M25.928 16.002l7.822 4.984 -7.878 5.019L18 20.989l-7.872 5.016L2.25 20.985l7.822 -4.984L2.25 11.019 10.128 6 18 11.014 25.872 6 33.75 11.019l-7.822 4.983zm-0.111 0L18 11.022l-7.817 4.98L18 20.982l7.817 -4.98zM10.179 27.669l7.878 -5.019 7.878 5.019 -7.878 5.019 -7.878 -5.019z" />
      </svg>
    </Icon>
  );
}
