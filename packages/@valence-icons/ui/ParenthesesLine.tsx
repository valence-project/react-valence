import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ParenthesesLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M10.384 31.5C7.67 27.996 6 23.239 6 18c0 -5.239 1.669 -9.996 4.385 -13.5h3.021C10.853 8.082 9.3 12.813 9.3 18s1.552 9.918 4.106 13.5H10.384zm15.226 0H22.59c2.553 -3.582 4.106 -8.313 4.106 -13.5s-1.552 -9.918 -4.106 -13.5h3.021c2.715 3.504 4.385 8.261 4.385 13.5 0 5.239 -1.668 9.996 -4.385 13.5z" />
      </svg>
    </Icon>
  );
}
