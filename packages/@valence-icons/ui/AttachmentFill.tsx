import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _AttachmentFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M31.495 4.488L31.5 31.512a1.5 1.5 0 0 1 -1.49 1.488H5.989A1.49 1.49 0 0 1 4.5 31.512V4.488A1.5 1.5 0 0 1 5.989 3h24.015c0.824 0 1.491 0.666 1.491 1.488zM13.5 19.5V13.5a1.5 1.5 0 1 1 3 0v6a1.5 1.5 0 0 0 3 0V13.5a4.5 4.5 0 0 0 -9 0v6a7.5 7.5 0 0 0 15 0V12h-3v7.5a4.5 4.5 0 0 1 -9 0z" />
      </svg>
    </Icon>
  );
}
