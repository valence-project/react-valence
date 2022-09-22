import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _GalleryUploadLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M12 1.5v6H6v21h24V4.5h1.512c0.822 0 1.488 0.667 1.488 1.49v24.021a1.5 1.5 0 0 1 -1.488 1.49H4.488A1.49 1.49 0 0 1 3 30.011V5.989A1.5 1.5 0 0 1 4.488 4.5H9V1.5h3zm6 10.5l6 6h-4.5v6h-3v-6H12l6 -6zm9 -10.5v6h-12V4.5h9V1.5h3z" />
      </svg>
    </Icon>
  );
}
