import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _SlackLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M21.75 4.5A2.25 2.25 0 0 1 24 6.75v7.5a2.25 2.25 0 0 1 -4.5 0v-7.5A2.25 2.25 0 0 1 21.75 4.5zm-15 15H9v2.25A2.25 2.25 0 1 1 6.75 19.5zm12.75 7.5h2.25a2.25 2.25 0 1 1 -2.25 2.25V27zm2.25 -7.5h7.5a2.25 2.25 0 0 1 0 4.5h-7.5a2.25 2.25 0 0 1 0 -4.5zm7.5 -7.5a2.25 2.25 0 0 1 0 4.5H27V14.25A2.25 2.25 0 0 1 29.25 12zm-22.5 0h7.5a2.25 2.25 0 0 1 0 4.5h-7.5a2.25 2.25 0 0 1 0 -4.5zm7.5 -7.5A2.25 2.25 0 0 1 16.5 6.75V9H14.25a2.25 2.25 0 0 1 0 -4.5zm0 15a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1 -4.5 0v-7.5A2.25 2.25 0 0 1 14.25 19.5z" />
      </svg>
    </Icon>
  );
}
