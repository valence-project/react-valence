import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FirstAidKitLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M24 1.5c0.828 0 1.5 0.672 1.5 1.5v4.5h6c0.828 0 1.5 0.672 1.5 1.5v21c0 0.828 -0.672 1.5 -1.5 1.5H4.5c-0.828 0 -1.5 -0.672 -1.5 -1.5V9c0 -0.828 0.672 -1.5 1.5 -1.5h6V3c0 -0.828 0.672 -1.5 1.5 -1.5h12zm6 9H6v18h24V10.5zm-10.5 3v4.5h4.5v3h-4.502L19.5 25.5h-3l-0.002 -4.5H12v-3h4.5V13.5h3zm3 -9H13.5v3h9V4.5z" />
      </svg>
    </Icon>
  );
}
