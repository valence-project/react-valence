import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _FileSearchLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M22.5 6H7.5v24h21V12h-6V6zM4.5 4.488C4.5 3.666 5.171 3 5.998 3H24l7.5 7.5v20.989A1.5 1.5 0 0 1 30.011 33H5.989A1.5 1.5 0 0 1 4.5 31.512V4.488zm15.793 17.181a6.003 6.003 0 0 1 -7.29 -9.411 6 6 0 0 1 9.411 7.29l3.315 3.315 -2.121 2.123 -3.315 -3.315zm-0.927 -3.048a3 3 0 1 0 -4.242 -4.242 3 3 0 0 0 4.242 4.242z" />
      </svg>
    </Icon>
  );
}
