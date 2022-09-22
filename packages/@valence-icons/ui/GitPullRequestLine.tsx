import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _GitPullRequestLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M22.5 7.5h3a3 3 0 0 1 3 3v12.255a4.502 4.502 0 1 1 -3 0V10.5h-3v4.5l-6.75 -6L22.5 3v4.5zM7.5 13.245a4.502 4.502 0 1 1 3 0v9.51a4.502 4.502 0 1 1 -3 0V13.245zM9 10.5a1.5 1.5 0 1 0 0 -3 1.5 1.5 0 0 0 0 3zm0 18a1.5 1.5 0 1 0 0 -3 1.5 1.5 0 0 0 0 3zm18 0a1.5 1.5 0 1 0 0 -3 1.5 1.5 0 0 0 0 3z" />
      </svg>
    </Icon>
  );
}
