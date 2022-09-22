import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _VideoUploadLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M24 6c0.828 0 1.5 0.672 1.5 1.5v6.3l7.819 -5.475c0.339 -0.237 0.807 -0.154 1.045 0.186 0.087 0.126 0.135 0.276 0.135 0.429v18.12c0 0.414 -0.336 0.75 -0.75 0.75 -0.154 0 -0.304 -0.048 -0.43 -0.135L25.5 22.2V28.5c0 0.828 -0.672 1.5 -1.5 1.5H3c-0.828 0 -1.5 -0.672 -1.5 -1.5V7.5c0 -0.828 0.672 -1.5 1.5 -1.5h21zm-1.5 3H4.5v18h18V9zM13.5 12l6 6h-4.5v6H12v-6H7.5l6 -6zm18 1.261l-6 4.2v1.077l6 4.2V13.26z" />
      </svg>
    </Icon>
  );
}
