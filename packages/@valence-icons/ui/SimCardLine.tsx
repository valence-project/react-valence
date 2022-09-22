import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _SimCardLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M9 6v24h18V11.742L21.258 6H9zM7.5 3h15l7.06 7.06a1.5 1.5 0 0 1 0.44 1.06V31.5a1.5 1.5 0 0 1 -1.5 1.5H7.5a1.5 1.5 0 0 1 -1.5 -1.5V4.5a1.5 1.5 0 0 1 1.5 -1.5zm4.5 15h12v9H12v-9z" />
      </svg>
    </Icon>
  );
}
