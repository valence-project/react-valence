import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _AccountPinBoxLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M21 31.5l-3 3 -3 -3H7.492A2.993 2.993 0 0 1 4.5 28.508V7.492C4.5 5.839 5.839 4.5 7.492 4.5h21.015C30.16 4.5 31.5 5.839 31.5 7.492v21.015A2.993 2.993 0 0 1 28.508 31.5H21zm7.5 -3V7.5H7.5v21h8.742L18 30.258 19.758 28.5H28.5zm-16.542 -1.23a14.975 14.975 0 0 1 -2.627 -1.467A10.491 10.491 0 0 1 18.153 21c3.6 0 6.776 1.811 8.667 4.571a14.992 14.992 0 0 1 -2.586 1.537A7.49 7.49 0 0 0 18.153 24c-2.573 0 -4.845 1.296 -6.195 3.27zM18 19.5a5.25 5.25 0 1 1 0 -10.5 5.25 5.25 0 0 1 0 10.5zm0 -3a2.25 2.25 0 1 0 0 -4.5 2.25 2.25 0 0 0 0 4.5z" />
      </svg>
    </Icon>
  );
}
