import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FacebookCircleFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 3C9.716 3 3 9.716 3 18c0 7.486 5.486 13.692 12.657 14.819V22.335h-3.81V18h3.81V14.696c0 -3.759 2.238 -5.835 5.665 -5.835 1.641 0 3.357 0.292 3.357 0.292v3.69h-1.89c-1.865 0 -2.445 1.157 -2.445 2.343V18h4.16l-0.664 4.335h-3.495v10.483C27.514 31.694 33 25.485 33 18c0 -8.284 -6.716 -15 -15 -15z" />
      </svg>
    </Icon>
  );
}
