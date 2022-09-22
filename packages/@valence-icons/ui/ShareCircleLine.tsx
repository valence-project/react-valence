import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ShareCircleLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M16.5 3.075v3.018A12.002 12.002 0 0 0 18 30a12.002 12.002 0 0 0 11.907 -10.5h3.019c-0.753 7.579 -7.149 13.5 -14.927 13.5 -8.284 0 -15 -6.716 -15 -15 0 -7.777 5.921 -14.174 13.5 -14.925zm13.5 5.046l-12 12L15.879 18l12 -12H21V3h12v12h-3V8.121z" />
      </svg>
    </Icon>
  );
}
