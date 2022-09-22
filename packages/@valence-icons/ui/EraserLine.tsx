import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _EraserLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M12.879 13.287l-7.425 7.425 7.791 7.791H15V28.5h1.758l5.667 -5.667 -9.546 -9.546zM15 11.166l9.546 9.546 4.242 -4.244 -9.546 -9.546L15 11.166zM21 28.5h10.5v3h-13.5l-5.997 0.003 -9.73 -9.73a1.5 1.5 0 0 1 0 -2.121L18.18 3.741a1.5 1.5 0 0 1 2.123 0l11.667 11.667a1.5 1.5 0 0 1 0 2.121L21 28.5z" />
      </svg>
    </Icon>
  );
}
