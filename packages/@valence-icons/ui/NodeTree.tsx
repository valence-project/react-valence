import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _NodeTree(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M15 3c0.828 0 1.5 0.672 1.5 1.5v6c0 0.828 -0.672 1.5 -1.5 1.5H12v3h7.5V13.5c0 -0.828 0.672 -1.5 1.5 -1.5h9c0.828 0 1.5 0.672 1.5 1.5v6c0 0.828 -0.672 1.5 -1.5 1.5h-9c-0.828 0 -1.5 -0.672 -1.5 -1.5v-1.5H12v9h7.5v-1.5c0 -0.828 0.672 -1.5 1.5 -1.5h9c0.828 0 1.5 0.672 1.5 1.5v6c0 0.828 -0.672 1.5 -1.5 1.5h-9c-0.828 0 -1.5 -0.672 -1.5 -1.5v-1.5H10.5c-0.828 0 -1.5 -0.672 -1.5 -1.5V12H6c-0.828 0 -1.5 -0.672 -1.5 -1.5V4.5c0 -0.828 0.672 -1.5 1.5 -1.5h9zm13.5 24h-6v3h6v-3zm0 -12h-6v3h6v-3zM13.5 6H7.5v3h6V6z" />
      </svg>
    </Icon>
  );
}
