import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _AppsLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M10.125 3.75A6.375 6.375 0 0 1 16.5 10.125V16.5H10.125a6.375 6.375 0 1 1 0 -12.75zM13.5 13.5V10.125A3.375 3.375 0 1 0 10.125 13.5H13.5zm-3.375 6H16.5v6.375A6.375 6.375 0 1 1 10.125 19.5zm0 3A3.375 3.375 0 1 0 13.5 25.875V22.5H10.125zm15.75 -18.75a6.375 6.375 0 1 1 0 12.75H19.5V10.125a6.375 6.375 0 0 1 6.375 -6.375zm0 9.75A3.375 3.375 0 1 0 22.5 10.125V13.5h3.375zM19.5 19.5h6.375A6.375 6.375 0 1 1 19.5 25.875V19.5zm3 3v3.375A3.375 3.375 0 1 0 25.875 22.5H22.5z" />
      </svg>
    </Icon>
  );
}
