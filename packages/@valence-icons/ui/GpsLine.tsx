import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _GpsLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M10.698 31.105A14.995 14.995 0 0 1 3 18C3 9.716 9.716 3 18 3s15 6.716 15 15a14.995 14.995 0 0 1 -7.698 13.105l-1.344 -2.686a12 12 0 1 0 -11.918 0l-1.343 2.686zm2.688 -5.376a9 9 0 1 1 9.226 0l-1.347 -2.696a6 6 0 1 0 -6.531 0l-1.349 2.696zM18 24l4.5 9H13.5l4.5 -9z" />
      </svg>
    </Icon>
  );
}
