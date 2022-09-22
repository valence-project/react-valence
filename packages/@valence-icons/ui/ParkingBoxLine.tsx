import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ParkingBoxLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M6 4.5h24a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1 -1.5 1.5H6a1.5 1.5 0 0 1 -1.5 -1.5V6a1.5 1.5 0 0 1 1.5 -1.5zm1.5 3v21h21V7.5H7.5zm6 3h5.25a5.25 5.25 0 0 1 0 10.5H16.5v4.5H13.5V10.5zm3 3v4.5h2.25a2.25 2.25 0 0 0 0 -4.5H16.5z" />
      </svg>
    </Icon>
  );
}
