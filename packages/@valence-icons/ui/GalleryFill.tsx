import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _GalleryFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M26.113 28.5c-1.164 -3.599 -3.416 -5.827 -6.399 -8.403A16.431 16.431 0 0 1 30 16.5V4.5h1.512c0.822 0 1.488 0.667 1.488 1.49v24.021a1.5 1.5 0 0 1 -1.488 1.49H4.488A1.49 1.49 0 0 1 3 30.011V5.989A1.5 1.5 0 0 1 4.488 4.5H9V1.5h3v6H6v10.5c7.83 0 14.493 3.693 16.97 10.5h3.144zM27 1.5v6h-12V4.5h9V1.5h3zm-2.25 13.5a2.25 2.25 0 1 1 0 -4.5 2.25 2.25 0 0 1 0 4.5z" />
      </svg>
    </Icon>
  );
}
