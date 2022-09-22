import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _MailSendLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M33 30.011a1.5 1.5 0 0 1 -1.488 1.49H4.488A1.49 1.49 0 0 1 3 30.011V28.5h27V10.95l-12 10.8 -15 -13.5V6a1.5 1.5 0 0 1 1.5 -1.5h27a1.5 1.5 0 0 1 1.5 1.5v24.011zM6.651 7.5L18 17.715 29.349 7.5H6.651zM0 22.5h12v3H0v-3zm0 -7.5h7.5v3H0v-3z" />
      </svg>
    </Icon>
  );
}
