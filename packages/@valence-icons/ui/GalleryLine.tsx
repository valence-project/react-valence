import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _GalleryLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30 19.5c-2.517 0 -4.873 0.69 -6.889 1.888A22.476 22.476 0 0 1 27.22 28.5H30v-9zm-5.994 9C21.066 21.453 14.112 16.5 6 16.5v12h18.006zM6 13.5c5.745 0 10.985 2.152 14.961 5.694A16.424 16.424 0 0 1 30 16.5V4.5h1.512c0.822 0 1.488 0.667 1.488 1.49v24.021a1.5 1.5 0 0 1 -1.488 1.49H4.488A1.49 1.49 0 0 1 3 30.011V5.989A1.5 1.5 0 0 1 4.488 4.5H9V1.5h3v6H6v6zm21 -12v6h-12V4.5h9V1.5h3zm-2.25 13.5a2.25 2.25 0 1 1 0 -4.5 2.25 2.25 0 0 1 0 4.5z" />
      </svg>
    </Icon>
  );
}
