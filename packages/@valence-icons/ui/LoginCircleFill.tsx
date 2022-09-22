import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _LoginCircleFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M15 16.5H3.075C3.825 8.921 10.221 3 18 3c8.284 0 15 6.716 15 15s-6.716 15 -15 15c-7.777 0 -14.174 -5.921 -14.925 -13.5H15v4.5l7.5 -6 -7.5 -6v4.5z" />
      </svg>
    </Icon>
  );
}
