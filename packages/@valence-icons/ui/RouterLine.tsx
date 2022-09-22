import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _RouterLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M16.5 21v-4.5h3v4.5h7.5a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1 -1.5 1.5H9a1.5 1.5 0 0 1 -1.5 -1.5v-9a1.5 1.5 0 0 1 1.5 -1.5h7.5zM3.765 13.255C5.752 7.296 11.376 3 18 3s12.249 4.296 14.235 10.255l-2.847 0.948a12.005 12.005 0 0 0 -22.776 0l-2.845 -0.948zm5.694 1.897a9.005 9.005 0 0 1 17.082 0l-2.847 0.95a6.003 6.003 0 0 0 -11.388 0l-2.847 -0.95zM10.5 24v6h15v-6H10.5z" />
      </svg>
    </Icon>
  );
}
