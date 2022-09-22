import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CodeBoxFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M4.5 4.5h27a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm20.196 18.804L30 18l-5.304 -5.304L22.575 14.82 25.758 18l-3.183 3.181 2.121 2.123zM10.242 18L13.425 14.819 11.304 12.696 6 18l5.304 5.304L13.425 21.18 10.242 18zm6.624 7.5l5.46 -15h-3.192l-5.46 15h3.192z" />
      </svg>
    </Icon>
  );
}
