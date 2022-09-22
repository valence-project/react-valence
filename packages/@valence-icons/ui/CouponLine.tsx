import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CouponLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M3 14.25V6a1.5 1.5 0 0 1 1.5 -1.5h27a1.5 1.5 0 0 1 1.5 1.5v8.25a3.75 3.75 0 1 0 0 7.5V30a1.5 1.5 0 0 1 -1.5 1.5H4.5a1.5 1.5 0 0 1 -1.5 -1.5v-8.25a3.75 3.75 0 1 0 0 -7.5zm3 -2.298a6.75 6.75 0 0 1 0 12.096V28.5h24v-4.452a6.75 6.75 0 0 1 0 -12.096V7.5H6v4.452zM13.5 13.5h9v3H13.5V13.5zm0 6h9v3H13.5v-3z" />
      </svg>
    </Icon>
  );
}
