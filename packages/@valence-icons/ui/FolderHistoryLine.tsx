import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FolderHistoryLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M15.621 4.5l3 3H31.5c0.828 0 1.5 0.672 1.5 1.5v21c0 0.828 -0.672 1.5 -1.5 1.5H4.5c-0.828 0 -1.5 -0.672 -1.5 -1.5V6c0 -0.828 0.672 -1.5 1.5 -1.5h11.121zm-1.242 3H6v21h24V10.5h-12.621l-3 -3zM19.5 13.5v6h4.5v3h-7.5V13.5h3z" />
      </svg>
    </Icon>
  );
}
