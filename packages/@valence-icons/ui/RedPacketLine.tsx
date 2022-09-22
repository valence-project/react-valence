import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _RedPacketLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M21.259 14.645A14.97 14.97 0 0 0 28.5 10.712V6H7.5v4.712a14.97 14.97 0 0 0 7.24 3.933 3.75 3.75 0 0 1 6.519 0zm0.312 3a3.752 3.752 0 0 1 -7.143 0A17.91 17.91 0 0 1 7.5 14.623V30h21V14.622a17.91 17.91 0 0 1 -6.928 3.024zM6 3h24a1.5 1.5 0 0 1 1.5 1.5v27a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V4.5a1.5 1.5 0 0 1 1.5 -1.5z" />
      </svg>
    </Icon>
  );
}
