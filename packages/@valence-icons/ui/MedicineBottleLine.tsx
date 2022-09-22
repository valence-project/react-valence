import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _MedicineBottleLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M28.5 3v3h-3v4.5c2.486 0 4.5 2.014 4.5 4.5v16.5c0 0.828 -0.672 1.5 -1.5 1.5H7.5c-0.828 0 -1.5 -0.672 -1.5 -1.5V15c0 -2.486 2.014 -4.5 4.5 -4.5V6H7.5V3h21zm-3 10.5H10.5c-0.828 0 -1.5 0.672 -1.5 1.5v15h18V15c0 -0.828 -0.672 -1.5 -1.5 -1.5zm-6 3v3h3v3h-3.002L19.5 25.5h-3l-0.002 -3H13.5v-3h3v-3h3zm3 -10.5H13.5v4.5h9V6z" />
      </svg>
    </Icon>
  );
}
