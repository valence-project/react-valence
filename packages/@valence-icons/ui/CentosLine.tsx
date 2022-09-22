import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _CentosLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 3l6.438 6.438 1.591 -1.59L24.181 6H30v5.819l-1.85 -1.85 -1.59 1.591L33 18l-6.438 6.44 1.588 1.588L30 24.181V30h-5.82l1.848 -1.85 -1.588 -1.59L18 33l-6.44 -6.44 -1.591 1.59L11.819 30H6v-5.82l1.847 1.848 1.591 -1.59L3 18l6.44 -6.44 -1.593 -1.591L6 11.819V6h5.819L9.969 7.845l1.593 1.593L18 3zm0 17.12l-4.32 4.319 4.32 4.32 4.319 -4.32L18 20.118zM11.56 13.68L7.242 18l4.317 4.317 4.32 -4.32 -4.319 -4.316zm12.878 0l-4.316 4.317 4.317 4.319L28.758 18l-4.32 -4.319zM18 7.242L13.683 11.56l4.319 4.317 4.316 -4.319L18 7.242z" />
      </svg>
    </Icon>
  );
}
